# AI-Pet Agent Guidelines

## Project
AI-Pet is a cross-platform AI native desktop companion system.

Goals:
- Replaceable pet characters
- Pet life/state simulation
- System awareness
- Multi-provider AI conversation
- Token consumption converted into pet food
- Plugin and pet-pack ecosystem

## Architecture Rules

All features must follow:

UI -> Service -> Core Engine -> Event Bus

Do not put business logic inside UI components.

## Core Principles

### PetEngine
The single source of truth for pet state.

Manages:
- hunger
- energy
- mood
- affection
- tokenFood
- currentState

### Event Driven
All behavior should be triggered by events.

Examples:
- CPU_HIGH
- MEMORY_HIGH
- FILE_DELETE
- USER_CLICK
- AI_CHAT
- TOKEN_LOW

### Security
- API keys only exist in Electron main process.
- Renderer must never directly access secrets.
- File monitoring only observes by default.

## Technology Direction

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

## Development Rules

Before modifying core modules:
1. Understand existing architecture.
2. Keep module boundaries.
3. Update related docs.
4. Add tests when possible.

## Commit Convention

feat: feature
fix: bug fix
refactor: refactor
docs: documentation
test: tests
