#!/usr/bin/env sh

# abort on errors
set -e

REPO=git@github.com:Computational-Thinking/ia-assistant-olimpics.git
BRANCH=main
SCRIPT_DIR=$( dirname -- "$0"; )

# build
npm run build


# navigate into the build output directory
cd $SCRIPT_DIR/src/.vuepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'
git branch -M main

# if you are deploying to https://<USERNAME>.github.io
git push --force --set-upstream $REPO $BRANCH

cd -