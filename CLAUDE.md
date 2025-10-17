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

# Run Rust tests
cargo test

# Run a specific Rust test
cargo test test_name

# Run tests in a specific module
cargo test gorilla::tests
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

- **Rust tests**: Property-based tests using proptest in `chimp128.rs`
- **Python tests**: `test/test_gorilla.py` uses Hypothesis for property-based testing of the Gorilla codec

## Key Implementation Details

### PyO3 Module Structure

The project uses PyO3's submodule pattern. The `gorilla` submodule is created as a separate PyModule and added to sys.modules to support direct imports. This is a workaround for PyO3 issue #759.

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
- There are debug `println!` statements throughout the code for development/debugging
- The Gorilla implementation has a TODO to make NaN handling work correctly
