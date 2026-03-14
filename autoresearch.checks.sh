#!/usr/bin/env bash
set -euo pipefail

log_file="/tmp/floatbungler-autoresearch-tests.log"

if ! just test >"$log_file" 2>&1; then
  tail -n 80 "$log_file"
  exit 1
fi
