# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

floatbungler is a Python extension module written in Rust using PyO3 that implements floating-point compression algorithms. The project provides two main compression algorithms:
- **Gorilla**: Facebook's time-series compression algorithm
- **Chimp128**: An advanced compression algorithm with ring buffers and lookup tables

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

- **`lib.rs`**: PyO3 module definition. Creates the `floatbungler` Python module with submodules. Uses the sys.modules workaround to enable `from floatbungler import gorilla` imports.

- **`gorilla.rs`**: Gorilla compression algorithm implementation
  - `encode_plain()`/`encode()`: Compresses f64 arrays using XOR-based delta encoding with leading/trailing zero optimization
  - `decode_plain()`/`decode()`: Decompresses back to f64 arrays
  - Tracks previous leading/trailing zeros for efficient encoding

- **`chimp128.rs`**: Chimp128 compression algorithm (more advanced)
  - Uses a 128-entry ring buffer and 16384-entry lookup table
  - Selects best reference value from ring buffer based on trailing zeros
  - Encodes using bin-encoded leading zeros (3 bits) rather than raw values

- **`bits.rs`**: Low-level bit-oriented I/O
  - `Bitwrite`: Writes individual bits to a byte buffer
  - `Bitread`: Reads individual bits from a byte slice
  - Both support f64 and arbitrary-length u64 operations

- **`bit_utils.rs`**: Utility functions for bit manipulation
  - `count_leading()` / `count_trailing()`: Count leading/trailing zeros
  - `bin_count()` / `bin_encode()` / `bin_decode()`: Bin-based encoding for leading zeros (bins: 0, 8, 12, 16, 18, 20, 22, 24)

### Python Interface (`python/floatbungler/`)

- **`__init__.py`**: Re-exports everything from the compiled Rust extension module

### Testing

- **Python tests**: Both `test/test_gorilla.py` and `test/test_chimp128.py` use Hypothesis for property-based testing of the compression codecs. Tests use `numpy.testing.assert_equal` to handle NaN comparisons correctly.

## Key Implementation Details

### PyO3 Module Structure

The project uses PyO3's submodule pattern. Both `gorilla` and `chimp128` submodules are created as separate PyModules and added to sys.modules to support direct imports (`from floatbungler import gorilla`, `from floatbungler import chimp128`). This is a workaround for PyO3 issue #759.

### Compression Algorithms

Both Gorilla and Chimp128 use XOR-based compression:
1. First value is stored uncompressed
2. Subsequent values are XORed with a reference (previous value for Gorilla, ring buffer entry for Chimp128)
3. The XOR result is encoded with leading/trailing zero compression

Chimp128 additionally uses:
- A ring buffer to find better reference values (more trailing zeros = better compression)
- A lookup table indexed by the low 14 bits for fast ring buffer lookups
- Binned encoding of leading zeros to reduce bit overhead

## Development Notes

- The project requires Python 3.10+
- Maturin is configured to use `python-source = "python"` to find the Python package
- Both compression algorithms handle NaN values correctly
- To add new dependencies, use `uv add` instead of editing `pyproject.toml`