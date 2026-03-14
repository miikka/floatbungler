#!/usr/bin/env bash
set -euo pipefail

# Fast pre-check: ensure target source file exists
[[ -f src/chimp128.rs ]]

metric="$(just bench-target | tail -n1 | tr -d '[:space:]')"

python3 - <<'PY' "$metric"
import sys

m = float(sys.argv[1])
print(f"METRIC chimp128_runtime_us={m}")
PY
