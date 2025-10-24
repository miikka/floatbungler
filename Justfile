# SPDX-FileCopyrightText: 2025 Miikka Koskinen
#
# SPDX-License-Identifier: ISC

test:
    uv run pytest

changelog:
    git-cliff -o CHANGELOG.md
