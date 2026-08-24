import { PetEngine } from './core/PetEngine';
import { EventBus } from './core/EventBus';

export function bootstrap() {
  const petEngine = new PetEngine();
  const eventBus = new EventBus();

  return {
    petEngine,
    eventBus
  };
}
