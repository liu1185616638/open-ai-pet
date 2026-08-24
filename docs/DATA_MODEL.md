# Data Model Design

## PetState

```ts
interface PetState {
  id: string;
  name: string;
  hunger: number;
  energy: number;
  mood: number;
  affection: number;
  tokenFood: number;
  currentState: PetStatus;
}
```

## PetStatus

- NORMAL
- WORKING
- IDLE
- SLEEP
- HUNGRY
- OVER_CLOCK

## Design Rules

State changes must go through PetEngine.
No UI component may directly modify state.
