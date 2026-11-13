# Tool Sharing Reorganization Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the stale NodeJS tool-sharing entry with a maintainable tools hub covering development, operations, Flutter/WSL/WSA notes, and local AI deployment.

**Architecture:** Keep `/note/` as the landing page and organize content under focused subdirectories. Update the Hope theme navbar/sidebar to reference only existing pages, while preserving unrelated site sections and existing user changes.

**Tech Stack:** VuePress 2, vuepress-theme-hope, Markdown frontmatter, TypeScript navigation configuration.

---

### Task 1: Remove NodeJS and empty-page references

**Files:**
- Delete: `src/note/node-js/README.md`
- Delete: `src/note/node-js/current-path.md`
- Modify: `src/.vuepress/navbar.ts`
- Modify: `src/.vuepress/sidebar/note.ts`

- [ ] Remove the NodeJS navbar child and sidebar entry.
- [ ] Confirm no `/note/node-js/` references remain in navigation.

### Task 2: Build the tools-sharing landing page and categories

**Files:**
- Modify: `src/note/README.md`
- Create: `src/note/development/README.md`
- Create: `src/note/operations/README.md`
- Create: `src/note/ai-local/README.md`

- [ ] Replace the malformed landing-page markup with valid frontmatter and links.
- [ ] Add concise, actionable development-tool guidance and link Flutter notes.
- [ ] Add operations guidance and link WSL/WSA notes.
- [ ] Add local AI deployment tutorial covering Ollama, Open WebUI, model selection, GPU/CPU usage, and troubleshooting.

### Task 3: Update sidebar and validate content

**Files:**
- Modify: `src/.vuepress/sidebar/note.ts`

- [ ] Configure the `/note/` sidebar with the new category pages and retained notes.
- [ ] Search for broken NodeJS/donate/brain references in the active source tree.
- [ ] Run `pnpm docs:build` and confirm the build succeeds without empty-page warnings.
- [ ] Review the generated route set for `/note/`, `/note/development/`, `/note/operations/`, and `/note/ai-local/`.

### Task 4: Commit the focused change

- [ ] Stage only files changed for this reorganization; preserve unrelated worktree changes.
- [ ] Commit with `docs: reorganize tool sharing pages`.
