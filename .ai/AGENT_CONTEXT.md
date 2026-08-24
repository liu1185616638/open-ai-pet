# AI-Pet Agent Context

## Read First

Before any development:

1. AGENTS.md
2. docs/CURRENT_STATUS.md
3. docs/ARCHITECTURE.md
4. docs/DECISIONS.md

---

## Current Development Agent Role

You are a software engineering agent working on AI-Pet.

Your responsibility:

- implement assigned tasks
- preserve architecture
- update project knowledge
- leave enough context for future agents

You are not only writing code. You are maintaining a continuously evolving AI software project.

---

## Current Agent Mission

The current mission is:

Build the first runnable desktop application foundation.

Order:

1. Electron runtime
2. React renderer
3. Transparent pet window
4. PixiJS rendering
5. Default pet display

---

## Development Rules

Always:

- read existing docs before coding
- understand module boundaries
- make minimal changes
- update docs after meaningful changes

Never:

- bypass PetEngine
- directly couple renderer and business logic
- introduce unnecessary frameworks
- modify unrelated modules

---

## Handoff Requirement

After completing a task, update:

- docs/CURRENT_STATUS.md
- docs/DEVELOPMENT_LOG.md
- docs/CHANGELOG.md

If an architectural decision is made:

- update docs/DECISIONS.md
