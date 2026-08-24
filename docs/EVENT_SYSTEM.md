# Event System Design

AI-Pet uses event-driven architecture.

## Event Format

```ts
interface PetEvent {
  type: string;
  timestamp: number;
  payload: unknown;
}
```

## Built-in Events

- USER_CLICK
- CPU_HIGH
- MEMORY_HIGH
- FILE_DELETE
- AI_CHAT
- TOKEN_LOW
- IDLE_TIMEOUT

## Rules

Modules communicate through events instead of direct coupling.
