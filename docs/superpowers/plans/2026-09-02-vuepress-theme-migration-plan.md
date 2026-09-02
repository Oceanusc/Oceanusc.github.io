# VuePress Theme Hope Minimal Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (- [ ]) syntax for tracking.

**Goal:** Deploy the site successfully using current VuePress and VuePress Theme Hope versions, without preserving legacy optional features.

**Architecture:** Retain the VuePress site, Hope theme, content, navigation, sidebar, and basic blog home. Remove legacy theme-internal overrides and optional integrations. Convert slide-only content to normal Markdown, then use GitHub Actions as the end-to-end build and publish check.

**Tech Stack:** Node.js 20, pnpm 9, VuePress 2.0.0-rc.31, VuePress Theme Hope 2.0.0-rc.107, GitHub Actions, GitHub Pages.

---

## File structure

- src/.vuepress/config.ts: site metadata and theme registration; removes obsolete aliases/plugins.
- src/.vuepress/theme.ts: supported core Hope theme options; removes unsupported plugin block.
- src/.vuepress/client.ts: empty client config; removes old Hope preset styles.
- src/.vuepress/components/BlogHero.vue: delete; it imports unsupported internal Hope paths.
- src/README.md: keep current Blog homepage frontmatter.
- src/about/README.md: standard Markdown about page without slide layout/directives.
- package.json and pnpm-lock.yaml: remove unused legacy integrations and regenerate using pnpm 9.

### Task 1: Establish migration baseline

**Files:** no changes; test is the GitHub Actions deployment workflow.

- [ ] Inspect the latest deployment workflow and record the exact build error.
- [ ] Run rg -n 'layout:|@slidestart|@slideend|:::|\^\^|==|\$\$|\$[^$]|```(flow|mermaid)' src package.json to inventory legacy layout and extension syntax.
- [ ] Do not commit the read-only baseline check.

### Task 2: Remove unsupported theme integration points

**Files:** modify src/.vuepress/config.ts, src/.vuepress/theme.ts, src/.vuepress/client.ts; delete src/.vuepress/components/BlogHero.vue.

- [ ] Treat the current unresolved-layout workflow failure as the failing integration test.
- [ ] In config.ts, retain dest, head, locales, theme, and shouldPrefetch. Remove appendDatePlugin, getDirname/path, the BlogHero alias, and plugin registration. Remove the unused hopeTheme import.
- [ ] In theme.ts, retain identity, logo/favicon, repository metadata, locale navbar/sidebar, locale blog metadata, footer, and copyright. Delete the entire plugins object: searchPro, blog extras, comment, feed, mdEnhance, pwa, and shiki.
- [ ] Replace client.ts with only defineClientConfig({}); delete BlogHero.vue.
- [ ] Run pnpm run docs:build. Expected: old theme-internal module/config errors are removed; any remaining error is a page-level legacy syntax/layout failure.
- [ ] Commit with: refactor: remove legacy Hope theme integrations.

### Task 3: Convert legacy page layouts and syntax

**Files:** modify src/README.md, src/about/README.md, and only source Markdown files that block the build.

- [ ] Ensure src/README.md has home: true and layout: Blog; do not restore BlogHome.
- [ ] Rewrite src/about/README.md as a standard page with its existing title and 基本信息 heading/list. Remove layout: Slides, @slidestart, @slideend, and Reveal CSS comments.
- [ ] For each post-build error identified by Task 1, replace only blocking extension syntax with ordinary Markdown (headings, lists, blockquotes, or code fences). Preserve ordinary Markdown unchanged.
- [ ] Run pnpm run docs:build, Test-Path dist/index.html, and Test-Path dist/about/index.html. Expected: build exits 0 and both files exist.
- [ ] Commit with: refactor: replace legacy page layouts.

### Task 4: Remove unused optional dependencies and regenerate lockfile

**Files:** modify package.json and pnpm-lock.yaml.

- [ ] After confirming no remaining source imports, remove: @vuepress/plugin-append-date, @vuepress/plugin-docsearch, @vuepress/plugin-feed, @vuepress/plugin-pwa, @waline/client, flowchart.ts, mathjax-full, mermaid, reveal.js, and vuepress-plugin-search-pro.
- [ ] Retain @vuepress/bundler-vite, vuepress, vuepress-theme-hope, vue, sass, and current lint/build tooling.
- [ ] Use pnpm 9.15.9 to run pnpm install, then pnpm install --frozen-lockfile. Expected: both succeed and the lockfile is pnpm-9 compatible.
- [ ] Run pnpm run docs:build. Expected: exit code 0.
- [ ] Commit with: chore: remove retired VuePress integrations.

### Task 5: Verify deployment and Pages serving

**Files:** no changes unless a post-build deployment error requires a minimal error-specific workflow adjustment.

- [ ] Push migration commits to main and wait for the automatically triggered 部署文档 workflow.
- [ ] Verify Node setup, frozen install, document build, and deployment each succeed. Deployment must write dist to gh-pages.
- [ ] Inspect GitHub Pages settings. Expected source is gh-pages branch at /(root); correct it only if different.
- [ ] Open the production URL. Expected: homepage, navigation, and /about/ work without a 404.
- [ ] Commit a workflow change only for a documented post-build deployment error; do not make speculative workflow changes.