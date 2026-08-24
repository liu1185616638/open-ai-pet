# Database Design

Storage uses SQLite.

## Tables

### pets

Stores pet identity and state.

### ai_usage

Stores:

- provider
- model
- input tokens
- output tokens
- food cost

### events

Stores event history.

## Rules

Database access must go through StorageService.
