# SPDX-FileCopyrightText: 2025 Miikka Koskinen
#
# SPDX-License-Identifier: ISC

check:
    cargo fmt --check
    cargo clippy

fix:
    cargo fmt
    cargo clippy --fix

test:
    uv run pytest

bench:
    uv run pytest bench/ --benchmark-enable

bench-quick:
    uv run pytest bench/ --benchmark-enable -k "100"

@bench-target:
    uv run -q pytest bench/ -qq --benchmark-enable --benchmark-json bench.json --benchmark-quiet -k "10000-gorilla" 2>&1 >/dev/null
    python3 scripts/bench_geomean.py

changelog:
    git-cliff -o CHANGELOG.md
