export type PetStatus =
  | 'NORMAL'
  | 'WORKING'
  | 'IDLE'
  | 'SLEEP'
  | 'HUNGRY'
  | 'OVER_CLOCK';

export interface PetState {
  hunger: number;
  energy: number;
  mood: number;
  affection: number;
  tokenFood: number;
  status: PetStatus;
}

export class PetEngine {
  private state: PetState;

  constructor() {
    this.state = {
      hunger: 100,
      energy: 100,
      mood: 100,
      affection: 0,
      tokenFood: 0,
      status: 'NORMAL'
    };
  }

  getState(): PetState {
    return this.state;
  }
}
