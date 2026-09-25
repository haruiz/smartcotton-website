const childProcess = require("node:child_process");
const fs = require("node:fs");
const http = require("node:http");
const path = require("node:path");

const WebSocketImpl = globalThis.WebSocket ?? require("ws");

const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const url = "http://localhost:4173/smartcotton-website/";
const port = 9400 + Math.floor(Math.random() * 500);
const profile = path.resolve(".codex-tmp", `cdp-profile-${Date.now()}`);
const output = path.resolve(".codex-tmp", "home-mobile-cdp.png");

function requestJson(targetUrl, method = "GET") {
  return new Promise((resolve, reject) => {
    const request = http.request(targetUrl, { method }, (response) => {
      let body = "";
      response.setEncoding("utf8");
      response.on("data", (chunk) => {
        body += chunk;
      });
      response.on("end", () => {
        if (response.statusCode < 200 || response.statusCode >= 300) {
          reject(new Error(`${method} ${targetUrl} failed with ${response.statusCode}: ${body}`));
          return;
        }
        resolve(JSON.parse(body));
      });
    });
    request.on("error", reject);
    request.end();
  });
}

async function waitForVersion() {
  const endpoint = `http://127.0.0.1:${port}/json/version`;
  const deadline = Date.now() + 15000;
  while (Date.now() < deadline) {
    try {
      return await requestJson(endpoint);
    } catch {
      await new Promise((resolve) => setTimeout(resolve, 250));
    }
  }
  throw new Error("Chrome DevTools endpoint did not become available");
}

function connect(wsUrl) {
  const socket = new WebSocketImpl(wsUrl);
  let nextId = 1;
  const pending = new Map();
  const eventWaiters = new Map();

  socket.onmessage = (event) => {
    const message = JSON.parse(event.data);
    if (message.id && pending.has(message.id)) {
      const { resolve, reject } = pending.get(message.id);
      pending.delete(message.id);
      if (message.error) {
        reject(new Error(JSON.stringify(message.error)));
      } else {
        resolve(message.result);
      }
      return;
    }

    if (message.method && eventWaiters.has(message.method)) {
      for (const resolve of eventWaiters.get(message.method)) {
        resolve(message.params ?? {});
      }
      eventWaiters.delete(message.method);
    }
  };

  const opened = new Promise((resolve, reject) => {
    socket.onopen = resolve;
    socket.onerror = reject;
  });

  function send(method, params = {}) {
    const id = nextId++;
    const payload = JSON.stringify({ id, method, params });
    const promise = new Promise((resolve, reject) => {
      pending.set(id, { resolve, reject });
    });
    socket.send(payload);
    return promise;
  }

  function waitForEvent(method) {
    return new Promise((resolve) => {
      eventWaiters.set(method, [...(eventWaiters.get(method) ?? []), resolve]);
    });
  }

  return { socket, opened, send, waitForEvent };
}

async function main() {
  fs.mkdirSync(profile, { recursive: true });
  const chrome = childProcess.spawn(
    chromePath,
    [
      "--headless=new",
      "--disable-gpu",
      "--disable-crash-reporter",
      "--disable-crashpad",
      `--user-data-dir=${profile}`,
      `--remote-debugging-port=${port}`,
      "about:blank"
    ],
    { stdio: "ignore" }
  );

  try {
    await waitForVersion();
    const target = await requestJson(`http://127.0.0.1:${port}/json/new?${encodeURIComponent(url)}`, "PUT");
    const page = connect(target.webSocketDebuggerUrl);
    await page.opened;
    await page.send("Page.enable");
    await page.send("Runtime.enable");
    await page.send("Emulation.setDeviceMetricsOverride", {
      width: 390,
      height: 844,
      deviceScaleFactor: 1,
      mobile: true
    });
    const loaded = page.waitForEvent("Page.loadEventFired");
    await page.send("Page.navigate", { url });
    await loaded;
    await new Promise((resolve) => setTimeout(resolve, 1200));

    const metricsResult = await page.send("Runtime.evaluate", {
      expression:
        "JSON.stringify({innerWidth: window.innerWidth, innerHeight: window.innerHeight, scrollWidth: document.documentElement.scrollWidth, bodyScrollWidth: document.body.scrollWidth})",
      returnByValue: true
    });
    const metrics = JSON.parse(metricsResult.result.value);
    const screenshot = await page.send("Page.captureScreenshot", { format: "png", fromSurface: true });
    fs.writeFileSync(output, Buffer.from(screenshot.data, "base64"));
    page.socket.close();
    console.log(JSON.stringify({ output, metrics }, null, 2));
  } finally {
    chrome.kill();
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
