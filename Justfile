# SPDX-FileCopyrightText: 2025 Miikka Koskinen
#
# SPDX-License-Identifier: ISC

test:
    uv run pytest

bench:
    uv run pytest bench/ --benchmark-enable

bench-quick:
    uv run pytest bench/ --benchmark-enable -k "100"

changelog:
    git-cliff -o CHANGELOG.md
