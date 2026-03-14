# Autoresearch: Chimp128 runtime

## Objective
Optimize the runtime of the Chimp128 algorithm implementation, measured via the existing benchmark target (`just bench-target`), while preserving correctness.

## Metrics
- **Primary**: `chimp128_runtime_us` (µs, lower is better)
- **Secondary**: benchmark command pass/fail, `just test` pass/fail

## How to Run
`./autoresearch.sh` — outputs `METRIC chimp128_runtime_us=<number>`.

## Files in Scope
- `src/chimp128.rs` — Chimp128 encode/decode hot path logic
- `src/chimp_utils.rs` — shared bin-encoding helper logic used by Chimp128
- `src/bits.rs` — bit read/write primitives used by Chimp128
- `bench/*` and `scripts/bench_geomean.py` — benchmark harness/metric extraction if needed for measurement quality
- `autoresearch.sh`, `autoresearch.checks.sh`, `autoresearch.md`, `autoresearch.ideas.md` — autoresearch loop infrastructure/logging

## Off Limits
- Public Python API surface and behavior
- Non-Chimp128 algorithm semantics unless required for shared helper correctness/perf
- Dependency additions unless absolutely necessary

## Constraints
- Use `just bench-target` as the runtime measurement workload.
- Preserve correctness; verify with `just test`.
- Keep encoded/decoded behavior bit-for-bit compatible with existing tests.

## What's Been Tried
- Baseline initialized.
