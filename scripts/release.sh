#!/usr/bin/env bash
# SPDX-FileCopyrightText: 2026 Miikka Koskinen
#
# SPDX-License-Identifier: ISC

set -euo pipefail

if [[ $# -ne 1 ]]; then
    echo "Usage: $0 <version>" >&2
    echo "Example: $0 0.2.0" >&2
    exit 1
fi

VERSION="$1"
TAG="v${VERSION}"

# Validate version looks like semver
if ! [[ "$VERSION" =~ ^[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
    echo "Error: version must be in X.Y.Z format, got: $VERSION" >&2
    exit 1
fi

# Ensure working tree is clean
if ! git diff --quiet || ! git diff --cached --quiet; then
    echo "Error: working tree is not clean. Commit or stash changes first." >&2
    exit 1
fi

echo "Releasing $TAG..."

# Update version in Cargo.toml
sed -i '' "s/^version = \".*\"/version = \"${VERSION}\"/" Cargo.toml

# Update Cargo.lock (cargo check is fast and updates the lock file)
cargo check -q

# Update CHANGELOG.md using git-cliff (includes uncommitted changes via --unreleased + --tag)
git-cliff --tag "$TAG" -o CHANGELOG.md

# Stage and commit
git add Cargo.toml Cargo.lock CHANGELOG.md
git commit -m "chore(release): prepare for ${TAG}"

# Tag the release
git tag -a "$TAG" -m "Release ${TAG}"

# Push commit and tag to origin
git push origin main
git push origin "$TAG"

# Create GitHub release with changelog for this version
RELEASE_NOTES=$(git-cliff --tag "$TAG" --current --strip all)
gh release create "$TAG" \
    --title "$TAG" \
    --notes "$RELEASE_NOTES"

echo "Done! Release $TAG published."
