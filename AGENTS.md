# AI-Pet Agent Guidelines

## Project Identity

AI-Pet is a cross-platform AI native desktop companion system.

Core idea:

- Pet character as an interactive desktop life form
- Replaceable pet characters and pet packs
- Pet state simulation and personality
- Computer environment awareness
- Multi-provider AI conversation
- Token usage converted into pet food and growth resources
- Plugin ecosystem

The project is not a traditional desktop animation program. The core is an event-driven AI companion platform.

---

# Architecture Rules

All features must follow:

```
UI -> Service -> Core Engine -> Event Bus -> Action
```

Rules:

- UI only handles presentation and user interaction.
- Business logic must not exist inside UI components.
- Modules communicate through explicit interfaces and events.
- Shared contracts belong in shared types/interfaces.

---

# Core Architecture Principles

## PetEngine

PetEngine is the single source of truth for pet state.

Manages:

- hunger
- energy
- mood
- affection
- tokenFood
- personality state
- current behavior state

Other modules must not directly modify pet state.

State changes must go through PetEngine.

---

## Event Driven Design

All autonomous behavior should be triggered by events.

Examples:

- CPU_HIGH
- MEMORY_HIGH
- FILE_DELETE
- USER_CLICK
- AI_CHAT_START
- AI_CHAT_END
- TOKEN_LOW
- IDLE_TIMEOUT

Flow example:

```
SystemMonitor
      |
      v
 EventBus
      |
      v
 PetEngine
      |
      v
 AnimationEngine
```

---

# Engineering Principles

## Simplicity First

Prefer simple, readable solutions.

Avoid:

- unnecessary abstraction
- speculative frameworks
- complex patterns for single use cases
- features not requested

Future extensibility must be based on real requirements, not assumptions.

---

## Convention Over Configuration

Follow existing project patterns.

New code must respect:

- directory structure
- naming conventions
- module boundaries
- event naming rules
- data model definitions

Do not create parallel implementations of existing concepts.

---

## Single Responsibility

Each module has one clear responsibility.

Example:

Wrong:

AIService handles:

- AI requests
- database storage
- pet state changes
- animation control

Correct:

AIService
-> sends AI events

PetEngine
-> updates pet state

AnimationEngine
-> renders behavior

---

## Explicit Contract First

Modules communicate through contracts.

Contracts include:

- TypeScript interfaces
- Event definitions
- Data schemas
- Plugin protocols

Avoid hidden dependencies between modules.

---

# Documentation Rules

Documentation is part of the product.

Important changes require documentation updates.

Update related docs when changing:

- architecture
- module responsibilities
- data structures
- event protocols
- plugin protocols
- AI provider design

Document the reason behind important decisions, not only the implementation.

---

# Change Rules

Before coding:

1. Understand the existing architecture.
2. Read related documentation.
3. Identify affected modules.
4. Choose the smallest valid solution.

Before modifying core modules:

- PetEngine
- EventBus
- AIProvider
- Database Schema
- PetPack Protocol

Analyze:

1. Existing dependencies.
2. Compatibility impact.
3. Required documentation changes.

---

# Code Change Rules

Keep changes focused.

Do not:

- refactor unrelated code
- modify files outside the task scope
- add dependencies without justification
- create abstractions only for future possibilities

Every changed line should have a clear relationship to the requested task.

---

# Security Rules

- API keys only exist in Electron main process.
- Renderer must never access secrets directly.
- User files are observed by default, never modified automatically.
- Dangerous operations require explicit user confirmation.

---

# Technology Direction

Desktop:

- Electron
- React
- TypeScript

Rendering:

- PixiJS

Storage:

- SQLite

AI:

- OpenAI compatible SDK
- LiteLLM support

---

# Agent Workflow

For non-trivial tasks:

Before implementation:

1. Explain the implementation approach briefly.
2. Identify impacted files/modules.
3. Confirm assumptions.

During implementation:

- follow existing architecture
- make minimal changes
- avoid unrelated cleanup

After implementation:

Report:

- Changed files
- Design reason
- Validation performed
- Potential risks

---

# Verification Rules

Completion requires evidence.

Depending on task scope:

- build verification
- test verification
- type checking
- runtime validation

Do not claim validation that was not performed.

---

# Project Learning Rules

This file is a living project contract.

When a repeated agent mistake occurs:

1. Determine whether a missing rule caused it.
2. Add a concrete rule.
3. Keep rules concise and actionable.

Avoid turning AGENTS.md into a full technical manual.
Detailed designs belong in docs/.

---

# Commit Convention

Use:

feat: feature
fix: bug fix
refactor: refactor
docs: documentation
test: tests
chore: maintenance
