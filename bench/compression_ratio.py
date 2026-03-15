#!/usr/bin/env python3
"""Report compression ratios for all codecs using the benchmark datasets."""

from __future__ import annotations

import argparse
import json
from pathlib import Path
import sys
from typing import Any

ROOT = Path(__file__).resolve().parents[1]
if str(ROOT) not in sys.path:
    sys.path.insert(0, str(ROOT))

from bench.conftest import PATTERNS, SIZES, generate_data
from floatbungler import chimp, chimp128, gorilla, patas

RATIO_SIZES = [10000]

ALGOS = [
    ("gorilla", gorilla),
    ("chimp", chimp),
    ("chimp128", chimp128),
    ("patas", patas),
]


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--json",
        action="store_true",
        help="Emit the benchmark results as JSON instead of the textual table",
    )
    return parser.parse_args()


def compute_results() -> list[dict[str, Any]]:
    results: list[dict[str, Any]] = []
    for size in RATIO_SIZES:
        for pattern in PATTERNS:
            data = generate_data(pattern, size)
            uncompressed_bytes = size * 8
            codecs: list[dict[str, Any]] = []
            for algo_name, algo in ALGOS:
                encoded = algo.encode(data)
                compressed_bytes = len(encoded)
                ratio = (
                    None
                    if compressed_bytes == 0
                    else uncompressed_bytes / compressed_bytes
                )
                codecs.append(
                    {
                        "name": algo_name,
                        "ratio": ratio,
                        "compressed_bytes": compressed_bytes,
                    }
                )
            results.append(
                {
                    "pattern": pattern,
                    "size": size,
                    "uncompressed_bytes": uncompressed_bytes,
                    "codecs": codecs,
                }
            )
    return results


def print_table(results: list[dict[str, Any]]) -> None:
    for entry in results:
        print(f"pattern={entry['pattern']:<9} n={entry['size']}")
        uncompressed_bytes = entry["uncompressed_bytes"]
        for codec in entry["codecs"]:
            ratio = codec["ratio"]
            ratio_str = (
                "      inf" if ratio is None else f"{ratio:8.3f}"
            )
            print(
                f"  {codec['name']:<8} -> "
                f"{ratio_str}x (raw {uncompressed_bytes} B, compressed {codec['compressed_bytes']} B)"
            )
        print()


def main() -> None:
    args = parse_args()
    results = compute_results()
    if args.json:
        json.dump(results, sys.stdout, indent=2)
        sys.stdout.write("\n")
    else:
        print_table(results)


if __name__ == "__main__":
    main()
