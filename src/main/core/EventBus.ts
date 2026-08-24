export interface PetEvent {
  type: string;
  timestamp: number;
  payload?: unknown;
}

export class EventBus {
  private listeners = new Map<string, Array<(event: PetEvent) => void>>();

  on(type: string, handler: (event: PetEvent) => void) {
    const list = this.listeners.get(type) ?? [];
    list.push(handler);
    this.listeners.set(type, list);
  }

  emit(event: PetEvent) {
    this.listeners.get(event.type)?.forEach(handler => handler(event));
  }
}
