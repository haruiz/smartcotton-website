"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { SmartCottonLogo } from "@/components/SmartCottonLogo";
import { navItems } from "@/content/site";

function hasNestedItems(item: (typeof navItems)[number]): item is Extract<(typeof navItems)[number], { items: readonly unknown[] }> {
  return "items" in item;
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const currentPath = basePath && pathname?.startsWith(basePath)
    ? pathname.slice(basePath.length) || "/"
    : pathname || "/";

  const isActiveHref = (href: string) => href === "/" ? currentPath === "/" : currentPath === href || currentPath.startsWith(`${href}/`);
  const isActiveItem = (item: (typeof navItems)[number]) => hasNestedItems(item)
    ? item.items.some((nestedItem) => isActiveHref(nestedItem.href))
    : isActiveHref(item.href);

  return (
    <header className="sticky top-0 z-50 border-b border-cotton-200/70 bg-[#fbfcf7]/92 shadow-sm backdrop-blur-xl">
      <nav className="container-page flex min-h-16 items-center justify-between gap-4" aria-label="Primary navigation">
        <Link href="/" className="focus-ring group flex items-center gap-3 rounded-md font-semibold text-cotton-900">
          <SmartCottonLogo
            variant="mark"
            aria-hidden="true"
            className="h-11 w-11 shrink-0 rounded-md bg-black object-cover shadow-sm ring-1 ring-black/10 transition duration-200 group-hover:scale-[1.02]"
          />
          <span className="grid min-w-0 gap-0.5">
            <span className="text-base font-extrabold leading-none tracking-wide text-cotton-950 sm:text-lg">
              SMARTCOTTON
            </span>
            <span className="hidden text-[0.64rem] font-semibold uppercase leading-none tracking-[0.16em] text-cotton-700 sm:block">
              Precision. Regeneration. Resilience.
            </span>
          </span>
        </Link>
        <button
          type="button"
          className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-md border border-cotton-200 bg-white text-cotton-900 shadow-sm transition hover:bg-cotton-100 lg:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((value) => !value)}
        >
          <span className="sr-only">Toggle navigation</span>
          {isOpen ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
        </button>
        <div className="hidden items-center gap-1 rounded-lg border border-cotton-200 bg-white/75 p-1 shadow-sm lg:flex">
          {navItems.map((item) => {
            const active = isActiveItem(item);

            return hasNestedItems(item) ? (
              <div key={item.label} className="group relative">
                <button
                  type="button"
                  className={clsx(
                    "focus-ring inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-cotton-900 transition hover:bg-cotton-50 hover:shadow-sm",
                    active && "bg-cotton-900 text-white hover:bg-cotton-900"
                  )}
                  aria-haspopup="true"
                >
                  {item.label}
                  <ChevronDown
                    aria-hidden="true"
                    size={14}
                    className="transition duration-200 group-hover:rotate-180"
                  />
                </button>
                <div className="invisible absolute left-1/2 top-full z-50 mt-2 w-64 -translate-x-1/2 rounded-lg border border-cotton-200 bg-white p-2 opacity-0 shadow-soft transition duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  {item.items.map((nestedItem) => (
                    <Link
                      key={nestedItem.href}
                      href={nestedItem.href}
                      className={clsx(
                        "focus-ring block rounded-md px-3 py-2 text-sm font-medium text-cotton-900 transition hover:bg-cotton-100",
                        isActiveHref(nestedItem.href) && "bg-cotton-50 text-skydata-700"
                      )}
                    >
                      {nestedItem.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  "focus-ring rounded-md px-3 py-2 text-sm font-medium text-cotton-900 transition hover:bg-cotton-50 hover:shadow-sm",
                  active && "bg-cotton-900 text-white hover:bg-cotton-900"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>
      {isOpen ? (
        <div id="mobile-navigation" className="border-t border-cotton-200 bg-[#fbfcf7] shadow-soft lg:hidden">
          <div className="container-page grid gap-3 py-3">
            {navItems.map((item) => (
              hasNestedItems(item) ? (
                <div key={item.label} className="grid gap-1">
                  <p className="px-3 text-xs font-bold uppercase tracking-[0.16em] text-cotton-700">{item.label}</p>
                  {item.items.map((nestedItem) => (
                    <Link
                      key={nestedItem.href}
                      href={nestedItem.href}
                      className={clsx(
                        "focus-ring rounded-md px-3 py-3 text-sm font-medium text-cotton-900 transition hover:bg-cotton-100",
                        isActiveHref(nestedItem.href) && "bg-white text-skydata-700 shadow-sm"
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {nestedItem.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={clsx(
                    "focus-ring rounded-md px-3 py-3 text-sm font-medium text-cotton-900 transition hover:bg-cotton-100",
                    isActiveHref(item.href) && "bg-white text-skydata-700 shadow-sm"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
