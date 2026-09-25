import json
import pathlib
import zipfile

from PIL import Image, ImageDraw


SOURCE = pathlib.Path(
    r"C:\Users\deepak.loura\OneDrive - Texas A&M AgriLife\Desktop\SAS_2026\SAS Cotton website\SAS Cotton_Website Material.docx"
)
OUT = pathlib.Path(".codex-tmp/annual-meeting-docx-media")


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    items = []

    with zipfile.ZipFile(SOURCE) as archive:
        media_names = [name for name in archive.namelist() if name.startswith("word/media/")]
        for media_name in media_names:
            destination = OUT / pathlib.Path(media_name).name
            destination.write_bytes(archive.read(media_name))
            with Image.open(destination) as image:
                items.append(
                    {
                        "name": destination.name,
                        "path": str(destination),
                        "width": image.width,
                        "height": image.height,
                        "mode": image.mode,
                        "size": destination.stat().st_size,
                    }
                )

    thumb_w = 320
    thumb_h = 220
    pad = 24
    label_h = 40
    cols = 3
    rows = (len(items) + cols - 1) // cols
    sheet = Image.new("RGB", (cols * (thumb_w + pad) + pad, rows * (thumb_h + label_h + pad) + pad), "white")
    draw = ImageDraw.Draw(sheet)

    for index, item in enumerate(items):
        with Image.open(item["path"]) as image:
            thumbnail = image.convert("RGB")
            thumbnail.thumbnail((thumb_w, thumb_h))

        x = pad + (index % cols) * (thumb_w + pad)
        y = pad + (index // cols) * (thumb_h + label_h + pad)
        sheet.paste(thumbnail, (x + (thumb_w - thumbnail.width) // 2, y + (thumb_h - thumbnail.height) // 2))
        draw.rectangle([x, y, x + thumb_w, y + thumb_h], outline=(180, 180, 180))
        draw.text((x, y + thumb_h + 6), f"{item['name']} {item['width']}x{item['height']}", fill=(0, 0, 0))

    sheet_path = OUT / "contact-sheet.jpg"
    sheet.save(sheet_path, quality=90)
    print(json.dumps({"out": str(OUT), "sheet": str(sheet_path), "items": items}, indent=2))


if __name__ == "__main__":
    main()
