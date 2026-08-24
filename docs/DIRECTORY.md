# Project Directory Specification

## Overview

This document defines the standard project structure for AI-Pet.

## Source Structure

```text
src/
├── main/              # Electron main process
│   ├── core/          # Core engines
│   ├── services/      # External capability services
│   └── index.ts
│
├── renderer/          # UI and rendering layer
│   ├── pet/           # Pet rendering and animation
│   ├── components/    # UI components
│   └── App.tsx
│
├── shared/            # Cross-process contracts
│   ├── types/
│   ├── events/
│   └── constants/
│
└── plugins/           # Built-in plugin implementations
```

## Rules

- main cannot depend on renderer implementation.
- renderer cannot access secrets.
- shared only contains contracts, not business logic.
- New modules must follow existing directory conventions.
