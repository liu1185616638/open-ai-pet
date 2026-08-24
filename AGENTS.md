# AI-Pet Agent Guidelines

## Project Identity

AI-Pet is a cross-platform AI native desktop companion platform.

Core capabilities:

- Replaceable pet characters
- Pet state and personality simulation
- Computer environment awareness
- Multi-provider AI conversation
- Token usage converted into pet growth resources
- Plugin ecosystem

The project is an event-driven AI companion platform, not only a desktop animation program.

---

# Architecture Rules

All features follow:

```
UI -> Service -> Core Engine -> Event Bus -> Action
```

Rules:

- UI only handles presentation.
- Business logic belongs in services/core modules.
- Modules communicate through explicit contracts.
- Shared interfaces/events belong in shared.

---

# Core Rules

## PetEngine

PetEngine is the only source of truth for pet state.

Manages:

- hunger
- energy
- mood
- affection
- tokenFood
- behavior state

No module directly modifies pet state.

---

## Event Driven Design

Behavior must be triggered through events.

Examples:

- USER_CLICK
- CPU_HIGH
- MEMORY_HIGH
- FILE_DELETE
- AI_CHAT_START
- TOKEN_LOW

---

# Engineering Principles

## Simplicity First

Prefer readable solutions.

Avoid:

- premature abstraction
- unnecessary frameworks
- speculative features

## Convention Over Configuration

Follow existing:

- directory structure
- naming rules
- module boundaries
- event definitions

## Single Responsibility

Each module has one responsibility.

## Explicit Contract First

Use:

- TypeScript interfaces
- Event definitions
- Data schemas

Avoid hidden dependencies.

---

# Documentation Rules

Documentation is part of the product.

When changing architecture, modules, data models, events, plugins, or AI providers:

Update related docs.

Important decisions must be recorded in:

```
docs/DECISIONS.md
```

Development history must be recorded in:

```
docs/DEVELOPMENT_LOG.md
```

---

# Agent Collaboration Rules

## Current Agent Role

The current development agent is a software engineering contributor responsible for:

- implementing assigned tasks
- preserving architecture
- maintaining project knowledge
- preparing clean handoff information for future agents

The agent is not only a code generator. It is a maintainer of the evolving AI-Pet engineering system.

---

# Agent Starting Process

Before any task:

Read in order:

1. AGENTS.md
2. docs/CURRENT_STATUS.md
3. docs/ARCHITECTURE.md
4. docs/DECISIONS.md
5. related module documentation

Then:

1. Explain implementation approach.
2. Identify affected modules.
3. Confirm constraints.
4. Implement minimal changes.

---

# Agent Completion Process

Every non-trivial task must leave project memory.

Update:

```
docs/CURRENT_STATUS.md
docs/DEVELOPMENT_LOG.md
docs/CHANGELOG.md
```

If architecture changes:

```
docs/DECISIONS.md
```

Final report must include:

- Changed files
- Implementation details
- Design reason
- Validation performed
- Risks
- Next recommended task

---

# Change Rules

Do not:

- refactor unrelated code
- bypass module boundaries
- introduce unnecessary dependencies
- modify user files automatically

Before modifying:

- PetEngine
- EventBus
- AIProvider
- Database Schema
- PetPack Protocol

Analyze impact first.

---

# Security Rules

- API keys only exist in Electron main process.
- Renderer cannot access secrets.
- File operations require explicit permission.

---

# Technology Direction

- Electron
- React
- TypeScript
- PixiJS
- SQLite
- OpenAI compatible SDK
- LiteLLM support

---

# Project Learning Rules

AGENTS.md is a living contract.

When repeated agent mistakes happen:

1. Identify missing rule.
2. Add concise guidance.
3. Keep detailed designs in docs.

---

# Commit Convention

- feat: feature
- fix: bug fix
- refactor: refactor
- docs: documentation
- test: tests
- chore: maintenance
