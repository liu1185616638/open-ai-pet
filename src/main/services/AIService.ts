export interface AIProvider {
  chat(message: string): Promise<string>;
  getUsage(): Promise<unknown>;
}

export class AIService {
  constructor(private provider?: AIProvider) {}

  async chat(message: string) {
    return this.provider?.chat(message) ?? '';
  }
}
