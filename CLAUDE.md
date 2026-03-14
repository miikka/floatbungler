<!--
SPDX-FileCopyrightText: 2025 Miikka Koskinen

SPDX-License-Identifier: ISC
-->

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

floatbungler is a Python extension module written in Rust using PyO3 that implements floating-point compression algorithms. The project provides four main compression algorithms:
- **Gorilla**: Facebook's time-series compression algorithm
- **Chimp**: Standard Chimp compression algorithm with bin-encoded leading zeros
- **Chimp128**: Advanced Chimp variant with 128-entry ring buffer and 16384-entry lookup table
- **Patas**: Byte-aligned compression algorithm with 128-entry ring buffer and lookup table

## Build System

This project uses Maturin to build Python extensions from Rust code. The toolchain uses `uv` for Python package management.

### Build Commands

```bash
# Build the extension module (development mode)
maturin develop

# Build release version
maturin build --release

# Run Python tests
uv run pytest

# Or using just
just test

```

## Architecture

### Rust Core (`src/`)

The Rust implementation is organized into modules:

- **`lib.rs`**: PyO3 module definition. Creates the `floatbungler` Python module with submodules. Uses the sys.modules workaround to enable direct imports like `from floatbungler import gorilla`.

- **`gorilla.rs`**: Gorilla compression algorithm implementation
  - `encode_plain()`/`encode()`: Compresses f64 arrays using XOR-based delta encoding with leading/trailing zero optimization
  - `decode_plain()`/`decode()`: Decompresses back to f64 arrays
  - Tracks previous leading/trailing zeros for efficient encoding
  - Uses helper functions from `bit_utils.rs`

- **`chimp.rs`**: Standard Chimp compression algorithm
  - Similar to Gorilla but uses bin-encoded leading zeros (3 bits instead of 5 bits)
  - Uses trailing zero threshold of 6 bits to decide between control codes
  - Simpler than Chimp128 - no ring buffer, just XOR with previous value

- **`chimp128.rs`**: Advanced Chimp128 compression algorithm
  - Uses a 128-entry ring buffer and 16384-entry lookup table
  - Selects best reference value from ring buffer based on trailing zeros
  - Uses trailing zero threshold of 13 bits (log2(128) + log2(64))
  - Encodes using bin-encoded leading zeros (3 bits) rather than raw values

- **`patas.rs`**: Patas compression algorithm (byte-aligned variant)
  - Uses a 128-entry ring buffer and 16384-entry lookup table (similar to Chimp128)
  - Byte-aligned encoding: uses 16-bit header + variable number of bytes for meaningful bits
  - Header format: 7 bits for reference index, 3 bits for meaningful bytes count, 6 bits for trailing zeros
  - Stores meaningful bits as whole bytes rather than individual bits
  - Uses `bytes` crate for efficient buffer management

- **`bits.rs`**: Low-level bit-oriented I/O
  - `Bitwrite`: Writes individual bits to a byte buffer
  - `Bitread`: Reads individual bits from a byte slice
  - Both support f64 and arbitrary-length u64 operations

- **`bit_utils.rs`**: Utility functions for bit manipulation
  - `count_trailing()`: Count trailing zeros
  - `bin_count()` / `bin_encode()` / `bin_decode()`: Bin-based encoding for leading zeros (bins: 0, 8, 12, 16, 18, 20, 22, 24)

### Python Interface (`python/floatbungler/`)

- **`__init__.py`**: Re-exports everything from the compiled Rust extension module
- **Type stubs (`.pyi` files)**: Type stubs are provided for all compression algorithms (`gorilla.pyi`, `chimp.pyi`, `chimp128.pyi`, `patas.pyi`) to enable IDE autocomplete and static type checking

### Testing

- **Python tests**: `test/test_gorilla.py`, `test/test_chimp.py`, `test/test_chimp128.py`, and `test/test_patas.py` use Hypothesis for property-based testing of the compression codecs. Tests use `numpy.testing.assert_equal` to handle NaN comparisons correctly.

## Key Implementation Details

### PyO3 Module Structure

The project uses PyO3's submodule pattern. All four compression algorithm submodules (`gorilla`, `chimp`, `chimp128`, `patas`) are created as separate PyModules and added to sys.modules to support direct imports (`from floatbungler import gorilla`, `from floatbungler import chimp`, `from floatbungler import chimp128`, `from floatbungler import patas`). This is a workaround for PyO3 issue #759.

### Compression Algorithms

All four algorithms use XOR-based compression:
1. First value is stored uncompressed
2. Subsequent values are XORed with a reference (previous value for Gorilla/Chimp, ring buffer entry for Chimp128/Patas)
3. The XOR result is encoded with leading/trailing zero compression

**Gorilla** uses:
- 5 bits for leading zero count
- Direct XOR with previous value
- Bit-level encoding

**Chimp** uses:
- Bin-encoded leading zeros (3 bits, covering bins: 0, 8, 12, 16, 18, 20, 22, 24)
- Trailing zero threshold of 6 bits to select control codes
- Direct XOR with previous value
- Bit-level encoding

**Chimp128** uses:
- A 128-entry ring buffer to find better reference values (more trailing zeros = better compression)
- A lookup table indexed by the low 14 bits for fast ring buffer lookups
- Trailing zero threshold of 13 bits (log2(128) + log2(64))
- Bin-encoded leading zeros (same as Chimp)
- Bit-level encoding

**Patas** uses:
- A 128-entry ring buffer and 16384-entry lookup table (similar to Chimp128)
- Byte-aligned encoding with 16-bit headers
- Header encodes: 7 bits reference index + 3 bits meaningful bytes + 6 bits trailing zeros
- Stores meaningful bits rounded up to whole bytes
- Uses `bytes` crate for buffer management instead of bit-level operations

## Development Notes

- The project requires Python 3.10+
- Maturin is configured to use `python-source = "python"` to find the Python package
- All compression algorithms handle NaN values correctly
- To add new dependencies, use `uv add` instead of editing `pyproject.toml`
- Helper functions for bit manipulation are centralized in `bit_utils.rs` and shared across all algorithms
