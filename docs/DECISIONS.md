# Architecture Decisions

This document records important design decisions and reasons.

## ADR Format

```md
# ADR-XXX

## Decision

What was decided.

## Context

Why this decision was needed.

## Alternatives

Other options considered.

## Consequences

Benefits and tradeoffs.
```

---

# ADR-001 Event Driven Architecture

## Decision

Use EventBus as the communication mechanism between autonomous behaviors.

## Context

Pet behavior can be triggered by:

- user actions
- system events
- AI responses
- random events

Direct module calls would create tight coupling.

## Consequences

Benefits:

- easier extension
- plugin compatibility
- clearer boundaries

Tradeoff:

- debugging event chains requires better logging.
