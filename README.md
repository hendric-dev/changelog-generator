# 📰 Changelog Generator

Create a changelog from the repositories commit messages.

This repository is a wrapper around [auto-changelog](https://github.com/cookpete/auto-changelog). \
It extends the tool with a Github action and a customized changelog template.

# Usage

Create a Github action workflow, e.g. `.github/workflows/generate-changelog.yml` with the following content:

```yml
on:
  push:
    branches:
      - main

jobs:
  generate-changelog:
    runs-on: ubuntu-latest
    name: 📰 Generate Changelog
    steps:
      - name: 🛎️ Checkout
        uses: actions/checkout@v4

      - name: 📝 Changelog Generator
        id: changelog-generator
        uses: hendric-dev/changelog-generator@v1
        with:
          replace-text: >
            {
              "^([A-Za-z]+-\\d+)": "[`$1`](https://my-jira.atlassian.net/browse/$1)",
              "\\(#(\\d+)\\)$": "([`#$1`](https://<path-to-my-github-repo>/pull/$1))"
            }
```

See the [action.yml](action.yml) for all config options.
