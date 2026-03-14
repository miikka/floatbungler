#!/usr/bin/env python3
# SPDX-FileCopyrightText: 2026 Miikka Koskinen
#
# SPDX-License-Identifier: ISC

from __future__ import annotations

import argparse
import json
import math
from pathlib import Path


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Print the geometric mean of benchmark medians from bench.json."
    )
    parser.add_argument(
        "bench_json",
        nargs="?",
        default="bench.json",
        help="Path to a pytest-benchmark JSON file (default: bench.json).",
    )
    return parser.parse_args()


def load_medians(path: Path) -> list[float]:
    with path.open() as fh:
        payload = json.load(fh)

    benchmarks = payload.get("benchmarks")
    if not isinstance(benchmarks, list):
        raise ValueError("expected 'benchmarks' to be a list")

    medians: list[float] = []
    for index, benchmark in enumerate(benchmarks):
        try:
            median = benchmark["stats"]["median"]
        except (KeyError, TypeError) as exc:
            raise ValueError(f"benchmark {index} is missing stats.median") from exc

        if not isinstance(median, (int, float)):
            raise ValueError(f"benchmark {index} has a non-numeric stats.median")
        if median <= 0:
            raise ValueError(f"benchmark {index} has a non-positive stats.median")

        medians.append(float(median))

    if not medians:
        raise ValueError("no benchmark medians found")

    return medians


def geometric_mean(values: list[float]) -> float:
    return math.exp(sum(math.log(value) for value in values) / len(values))


def main() -> int:
    args = parse_args()
    medians = load_medians(Path(args.bench_json))
    print(geometric_mean(medians))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
