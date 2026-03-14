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
- Baseline initialized at **962.99 µs** (`just bench-target`, checks via `just test`).
- **Kept**: replaced iterator-based fallback best-index search in `encode_plain()` with a bounded manual loop and changed modulo-128 ops to bitmasking (`& 127`). Result: **943.25 µs**.
- **Kept**: changed encode lookup table type from `usize` to `u32` and removed unused decode lookup table maintenance. Result: **934.80 µs**.
- **Kept**: replaced shared bin helper tiny-array iteration/lookups with direct match-based logic. Result: **917.91 µs**.
- **Discarded**: forced `#[inline(always)]` on bin helpers; regressed benchmark.
- **Discarded**: changed decode `assert!` to `debug_assert!`; no improvement versus best.
- **Kept (major)**: replaced encode fallback behavior on lookup miss with O(1) previous-value ring reference (`(index - 1) & 127`) instead of scanning ring buffer. Result: **759.72 µs**.
- **Kept (major)**: optimized shared bit I/O (`src/bits.rs`) with byte-aligned fast paths in `put_u64_lowest_bits`/`read_u64_lowest_bits` plus inlining of single-bit ops. Result: **555.57 µs**.
