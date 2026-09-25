from __future__ import annotations

import json
import sys
from pathlib import Path
from typing import Any

from docx import Document
from docx.oxml.ns import qn
from docx.table import Table
from docx.text.paragraph import Paragraph


def iter_block_items(parent):
    body = parent.element.body
    for child in body.iterchildren():
        if child.tag == qn("w:p"):
            yield Paragraph(child, parent)
        elif child.tag == qn("w:tbl"):
            yield Table(child, parent)


def paragraph_links(paragraph: Paragraph) -> list[dict[str, str]]:
    links: list[dict[str, str]] = []
    part = paragraph.part
    for hyperlink in paragraph._p.findall(".//w:hyperlink", paragraph._p.nsmap):
        rid = hyperlink.get(qn("r:id"))
        anchor = hyperlink.get(qn("w:anchor"))
        label = "".join(node.text or "" for node in hyperlink.findall(".//w:t", paragraph._p.nsmap)).strip()
        target = ""
        if rid and rid in part.rels:
            target = part.rels[rid].target_ref
        elif anchor:
            target = f"#{anchor}"
        if label or target:
            links.append({"label": label, "target": target})
    return links


def clean_cell(text: str) -> str:
    return " ".join(line.strip() for line in text.splitlines() if line.strip())


def table_to_rows(table: Table) -> list[list[str]]:
    rows: list[list[str]] = []
    for row in table.rows:
        rows.append([clean_cell(cell.text) for cell in row.cells])
    return rows


def markdown_table(rows: list[list[str]]) -> str:
    if not rows:
        return ""
    width = max(len(row) for row in rows)
    padded = [row + [""] * (width - len(row)) for row in rows]
    header = padded[0]
    lines = [
        "| " + " | ".join(cell.replace("|", "\\|") for cell in header) + " |",
        "| " + " | ".join("---" for _ in header) + " |",
    ]
    for row in padded[1:]:
        lines.append("| " + " | ".join(cell.replace("|", "\\|") for cell in row) + " |")
    return "\n".join(lines)


def main() -> int:
    if len(sys.argv) != 4:
        print("usage: extract_docx.py input.docx output.md output.json", file=sys.stderr)
        return 2

    input_path = Path(sys.argv[1])
    md_path = Path(sys.argv[2])
    json_path = Path(sys.argv[3])

    doc = Document(input_path)
    blocks: list[dict[str, Any]] = []
    md_lines: list[str] = [
        f"# Extracted DOCX: {input_path.name}",
        "",
    ]

    for index, block in enumerate(iter_block_items(doc), start=1):
        if isinstance(block, Paragraph):
            text = block.text.strip()
            if not text:
                continue
            style = block.style.name if block.style else ""
            links = paragraph_links(block)
            item = {"index": index, "type": "paragraph", "style": style, "text": text, "links": links}
            blocks.append(item)
            if style.lower().startswith("heading"):
                md_lines.append(f"\n## {text}\n")
            else:
                md_lines.append(text)
            if links:
                for link in links:
                    md_lines.append(f"[link: {link['label']} -> {link['target']}]")
            md_lines.append("")
        elif isinstance(block, Table):
            rows = table_to_rows(block)
            if not any(any(cell for cell in row) for row in rows):
                continue
            item = {"index": index, "type": "table", "rows": rows}
            blocks.append(item)
            md_lines.append(f"\n### Table {len([b for b in blocks if b['type'] == 'table'])}\n")
            md_lines.append(markdown_table(rows))
            md_lines.append("")

    image_rels = [
        {"rid": rid, "target": rel.target_ref}
        for rid, rel in doc.part.rels.items()
        if "image" in rel.reltype
    ]

    payload = {
        "source": str(input_path),
        "paragraph_count": sum(1 for block in blocks if block["type"] == "paragraph"),
        "table_count": sum(1 for block in blocks if block["type"] == "table"),
        "image_count": len(image_rels),
        "image_relationships": image_rels,
        "blocks": blocks,
    }

    md_path.parent.mkdir(parents=True, exist_ok=True)
    md_path.write_text("\n".join(md_lines), encoding="utf-8")
    json_path.write_text(json.dumps(payload, indent=2, ensure_ascii=False), encoding="utf-8")
    print(
        json.dumps(
            {
                "paragraph_count": payload["paragraph_count"],
                "table_count": payload["table_count"],
                "image_count": payload["image_count"],
                "markdown": str(md_path),
                "json": str(json_path),
            },
            indent=2,
        )
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
