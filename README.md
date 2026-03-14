<!--
SPDX-FileCopyrightText: 2025 Miikka Koskinen

SPDX-License-Identifier: ISC
-->

# floatbungler

A Python library, written in Rust, implementing compression algorithms for floating-point time series data.

## Algorithms

floatbungler provides four compression algorithms for float64 arrays:

- **Gorilla** - Facebook's time-series compression algorithm using XOR-based encoding
- **Chimp** - Improved compression with more efficient encoding
- **Chimp128** - Like Chimp but with 128-entry ring buffer for better reference selection
- **Patas** - Simpler, byte-aligned variant of Chimp128

All algorithms use XOR-based compression that exploits similarity between consecutive values in time series data.

## Motivation

I implemented the algorithms to understand them better myself.
I wanted to wrap them into a package in case I ever want to come back to them.

Should you use this in production?
Probably no.
Most likely what you want instead is [ALP](https://github.com/cwida/ALP).

## Usage

All algorithms follow the same API:

```python
from floatbungler import gorilla, chimp, chimp128, patas

# Your time series data
data = [1.1, 1.2, 1.15, 1.18, 1.16, 1.14]

# Compress
compressed = gorilla.encode(data)

# Decompress
decompressed = gorilla.decode(compressed, len(data))

assert data == decompressed
```

You need to pass the length to the `decode` function because the encoded output is not byte-aligned.

You can use any of the four algorithms by importing the corresponding module:

```python
# Try different algorithms
compressed_gorilla = gorilla.encode(data)
compressed_chimp = chimp.encode(data)
compressed_chimp128 = chimp128.encode(data)
compressed_patas = patas.encode(data)

# Compare compression ratios
print(f"Original size: {len(data) * 8} bytes")
print(f"Gorilla:  {len(compressed_gorilla)} bytes")
print(f"Chimp:    {len(compressed_chimp)} bytes")
print(f"Chimp128: {len(compressed_chimp128)} bytes")
print(f"Patas:    {len(compressed_patas)} bytes")
```

## API

Each algorithm module (`gorilla`, `chimp`, `chimp128`, `patas`) provides two functions:

### `encode(data: list[float]) -> bytes`

Compresses a list of floating-point numbers.

**Parameters:**
- `data`: List of float values to compress

**Returns:**
- Compressed data as bytes

### `decode(compressed: bytes, count: int) -> list[float]`

Decompresses data back to floating-point numbers.

**Parameters:**
- `compressed`: Compressed data from `encode()`
- `count`: Number of values to decode (must match original data length)

**Returns:**
- List of decompressed float values

## Development

```bash
# Install development dependencies
uv sync

# Run tests
uv run pytest
```

## Compatibility

The implementations here have not been tested against any other implementation.
At least the Patas implementation is not compatible with the one in DuckDB.

## Benchmarks

See https://miikka.github.io/floatbungler/dev/bench/

## License

See LICENSE file for details.
