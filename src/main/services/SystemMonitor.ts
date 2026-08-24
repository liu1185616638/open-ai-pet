export interface SystemStatus {
  cpu: number;
  memory: number;
}

export class SystemMonitor {
  async getStatus(): Promise<SystemStatus> {
    return {
      cpu: 0,
      memory: 0
    };
  }
}
