# Minimal VuePress Theme Hope migration

## Goal

Make the site deploy successfully with the current VuePress and VuePress Theme Hope versions. Legacy visual presentation and optional features do not need to be preserved.

## Scope

- Keep site content, navigation, sidebar, and the base Hope theme.
- Remove legacy theme plugin configuration that the current theme no longer accepts.
- Remove or update pages whose frontmatter requires removed layout or plugin support.
- Verify with the repository's GitHub Actions deployment workflow.

## Migration approach

1. Simplify `src/.vuepress/theme.ts` to the current theme's supported core options.
2. Remove legacy plugin blocks for search, blog extras, comments, feed, PWA, Shiki, and Markdown-enhancement features.
3. Convert pages that depend on unsupported layouts or remove their legacy layout declarations where the page remains meaningful as standard content.
4. Run the deployment workflow after each focused change, use logs to identify any remaining incompatibility, and stop only after the deployment job succeeds.

## Acceptance criteria

- `pnpm install --frozen-lockfile` succeeds in GitHub Actions.
- `pnpm run docs:build` completes without unresolved-layout or missing-plugin errors.
- The GitHub Pages deployment job completes successfully.
