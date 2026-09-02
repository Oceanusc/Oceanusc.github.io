# Minimal VuePress Theme Hope migration

## Goal

Make the site deploy successfully with the current VuePress and VuePress Theme Hope versions. Legacy visual presentation and optional features do not need to be preserved.

## Scope

- Keep site content, navigation, sidebar, and the base Hope theme.
- Simplify the legacy integration surface in `src/.vuepress/theme.ts`, `config.ts`, `client.ts`, and custom components/aliases that import Hope internals.
- Remove unsupported theme plugin configuration and corresponding direct dependencies.
- Inventory content that relies on removed layouts or Markdown-enhancement syntax; convert it to standard Markdown or remove the affected content where it is nonessential.
- Regenerate the lockfile with the workflow's Node 20 and pnpm 9 toolchain.
- Verify GitHub Actions deployment and that GitHub Pages serves the published branch.

## Migration approach

1. Retain only supported core Hope theme options, navigation, sidebar, metadata, and locale settings.
2. Remove legacy plugin blocks for search, blog extras, comments, feed, PWA, Shiki, and Markdown enhancements. Remove related imports, client presets, internal component aliases, custom overrides, and unused package dependencies.
3. Inventory `layout:` declarations and extension syntax (slides, code tabs, flow fences, containers, math, and `v-pre`). Rewrite essential pages as standard content; remove unsupported decorative/interactive sections.
4. Regenerate `pnpm-lock.yaml` with pnpm 9 after dependency cleanup. Verify a clean frozen-lockfile install on Node 20.
5. Build locally where possible, then use the deployment workflow as the source-of-truth integration test. Inspect the published `dist` output for the homepage and representative navigation/content routes.
6. Confirm the successful deployment publishes to `gh-pages` and the repository's Pages configuration serves that branch and site URL.

## Acceptance criteria

- `pnpm install --frozen-lockfile` succeeds in GitHub Actions under Node 20 and pnpm 9.
- `pnpm run docs:build` completes without unresolved-layout, missing-plugin, or module-resolution errors.
- The output contains `dist/index.html` and representative navigation/content pages.
- The GitHub Pages deployment job completes successfully.
- The repository's Pages configuration serves the deployed `gh-pages` content.
