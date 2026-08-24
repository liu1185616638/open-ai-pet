export type AnimationName =
  | 'idle'
  | 'walk'
  | 'happy'
  | 'sleep'
  | 'overclock';

export class AnimationEngine {
  play(animation: AnimationName) {
    console.log(`play animation: ${animation}`);
  }
}
