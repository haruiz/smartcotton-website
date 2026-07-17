import { readFileSync } from "node:fs";
import path from "node:path";

export type Publication = {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: string;
  type: "Journal Article" | "Conference Paper" | "Manuscript" | "Report" | "Extension Publication";
  link?: string;
};

type BibEntry = {
  entryType: string;
  citationKey: string;
  fields: Record<string, string>;
};

const publicationsBibPath = path.join(process.cwd(), "publications.bib");

function parseBibValue(input: string, startIndex: number) {
  let index = startIndex;
  while (/\s/.test(input[index] ?? "")) index += 1;

  const opening = input[index];
  if (opening === "{" || opening === "\"") {
    const closing = opening === "{" ? "}" : "\"";
    let depth = opening === "{" ? 1 : 0;
    let value = "";
    index += 1;

    while (index < input.length) {
      const character = input[index];

      if (opening === "{" && character === "{") {
        depth += 1;
        value += character;
      } else if (character === closing) {
        if (opening === "{") {
          depth -= 1;
          if (depth === 0) {
            index += 1;
            break;
          }
          value += character;
        } else {
          index += 1;
          break;
        }
      } else {
        value += character;
      }

      index += 1;
    }

    return { value, index };
  }

  let value = "";
  while (index < input.length && input[index] !== "," && input[index] !== "}") {
    value += input[index];
    index += 1;
  }

  return { value, index };
}

function parseBibEntries(input: string): BibEntry[] {
  const entries: BibEntry[] = [];
  let index = 0;

  while (index < input.length) {
    const atIndex = input.indexOf("@", index);
    if (atIndex === -1) break;

    const typeMatch = input.slice(atIndex + 1).match(/^([a-zA-Z]+)\s*\{/);
    if (!typeMatch) {
      index = atIndex + 1;
      continue;
    }

    const entryType = typeMatch[1].toLowerCase();
    index = atIndex + 1 + typeMatch[0].length;

    const keyEndIndex = input.indexOf(",", index);
    if (keyEndIndex === -1) break;

    const citationKey = input.slice(index, keyEndIndex).trim();
    const fields: Record<string, string> = {};
    index = keyEndIndex + 1;

    while (index < input.length) {
      while (/[\s,]/.test(input[index] ?? "")) index += 1;
      if (input[index] === "}") {
        index += 1;
        break;
      }

      const fieldMatch = input.slice(index).match(/^([a-zA-Z][\w-]*)\s*=/);
      if (!fieldMatch) {
        index += 1;
        continue;
      }

      const fieldName = fieldMatch[1].toLowerCase();
      index += fieldMatch[0].length;

      const parsed = parseBibValue(input, index);
      fields[fieldName] = cleanBibValue(parsed.value);
      index = parsed.index;
    }

    entries.push({ entryType, citationKey, fields });
  }

  return entries;
}

function cleanBibValue(value: string) {
  return value
    .replace(/\\&/g, "&")
    .replace(/[{}]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function formatAuthors(authors: string) {
  return authors
    .split(/\s+and\s+/i)
    .map((author) => author.trim())
    .filter(Boolean)
    .join(", ");
}

function publicationType(entryType: string): Publication["type"] {
  if (entryType === "inproceedings" || entryType === "conference") return "Conference Paper";
  if (entryType === "unpublished") return "Manuscript";
  if (entryType === "techreport" || entryType === "report") return "Report";
  if (entryType === "misc" || entryType === "manual") return "Extension Publication";
  return "Journal Article";
}

function publicationVenue(fields: BibEntry["fields"]) {
  return fields.journal ?? fields.booktitle ?? fields.institution ?? fields.publisher ?? fields.organization ?? "";
}

function publicationLink(fields: BibEntry["fields"]) {
  if (fields.url) return fields.url;
  if (fields.doi) return fields.doi.startsWith("http") ? fields.doi : `https://doi.org/${fields.doi}`;
  return undefined;
}

function loadPublications(): Publication[] {
  const bib = readFileSync(publicationsBibPath, "utf8");

  return parseBibEntries(bib)
    .map(({ entryType, citationKey, fields }) => ({
      id: citationKey,
      title: fields.title ?? "Untitled publication",
      authors: formatAuthors(fields.author ?? ""),
      venue: publicationVenue(fields),
      year: fields.year ?? "",
      type: publicationType(entryType),
      link: publicationLink(fields)
    }))
    .sort((first, second) => Number(second.year) - Number(first.year) || first.title.localeCompare(second.title));
}

export const publications = loadPublications();
