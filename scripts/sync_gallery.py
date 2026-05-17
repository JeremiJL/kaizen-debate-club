#!/usr/bin/env python3

import json
import re
import ssl
import sys
import urllib.request
from html import unescape
from pathlib import Path


ROOT_FOLDER_ID = "1na5zIMLsU2Toy0sHW7K_JIN2EfjvT4sb"
OUTPUT_PATH = Path(__file__).resolve().parents[1] / "public" / "scripts" / "gallery-data.js"
ENTRY_RE = re.compile(
    r'<div class="flip-entry" id="entry-([^"]+)".*?<a href="([^"]+)"[^>]*>.*?<div class="flip-entry-title">(.*?)</div>',
    re.S,
)
TYPE_RE = re.compile(r'drive-thirdparty\.googleusercontent\.com/16/type/([^"?]+)')
SSL_CONTEXT = ssl._create_unverified_context()


def fetch(url: str) -> str:
    with urllib.request.urlopen(url, context=SSL_CONTEXT) as response:
        return response.read().decode("utf-8", "replace")


def parse_entries(html: str) -> list[dict[str, str]]:
    entries = []
    for match in ENTRY_RE.finditer(html):
        entry_id, href, title = match.groups()
        block = match.group(0)
        type_match = TYPE_RE.search(block)
        entries.append(
            {
                "id": entry_id,
                "href": unescape(href),
                "title": unescape(title).strip(),
                "mimeHint": type_match.group(1) if type_match else "",
            }
        )
    return entries


def meeting_sort_key(item: dict[str, str]) -> tuple[int, int | str, str]:
    match = re.search(r"M(\d+)", item["title"])
    if match:
        return (0, int(match.group(1)), item["title"])
    return (1, item["title"], item["title"])


def build_gallery_snapshot(root_folder_id: str) -> list[dict[str, object]]:
    root_url = f"https://drive.google.com/embeddedfolderview?id={root_folder_id}#grid"
    meetings = []

    for folder in sorted(parse_entries(fetch(root_url)), key=meeting_sort_key):
        folder_url = f"https://drive.google.com/embeddedfolderview?id={folder['id']}#grid"
        photos = []

        for entry in parse_entries(fetch(folder_url)):
            if not entry["mimeHint"].startswith("image/"):
                continue

            photos.append(
                {
                    "id": entry["id"],
                    "title": entry["title"],
                    "href": entry["href"],
                    "thumbnail": f"https://drive.google.com/thumbnail?id={entry['id']}&sz=w1200",
                }
            )

        meetings.append(
            {
                "id": folder["id"],
                "title": folder["title"],
                "folderUrl": folder["href"],
                "photos": photos,
            }
        )

    return meetings


def write_snapshot(meetings: list[dict[str, object]], output_path: Path) -> None:
    output_path.write_text(
        "window.GALLERY_MEETINGS = "
        + json.dumps(meetings, ensure_ascii=True, separators=(",", ":"))
        + ";\n",
        encoding="utf-8",
    )


def main() -> int:
    try:
        meetings = build_gallery_snapshot(ROOT_FOLDER_ID)
        write_snapshot(meetings, OUTPUT_PATH)
    except Exception as exc:
        print(f"sync-gallery failed: {exc}", file=sys.stderr)
        return 1

    photo_count = sum(len(meeting["photos"]) for meeting in meetings)
    print(f"Synced {len(meetings)} meetings and {photo_count} photos to {OUTPUT_PATH}.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
