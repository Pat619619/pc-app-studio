#!/usr/bin/env bash
# Build and publish dist/ to the gh-pages branch (GitHub Pages serves that branch).
set -euo pipefail
cd "$(dirname "$0")/.."
npm run build
touch dist/.nojekyll
REMOTE=$(git remote get-url origin)
SHA=$(git rev-parse --short HEAD)
TMP=$(mktemp -d)
cp -r dist/. "$TMP"
cd "$TMP"
git init -q -b gh-pages
git add -A
git -c user.name="Patrick Carroll" -c user.email="patrickcarroll619@gmail.com" commit -qm "Deploy $SHA"
git push -q -f "$REMOTE" gh-pages
rm -rf "$TMP"
echo "Deployed $SHA to gh-pages"
