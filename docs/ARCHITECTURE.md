# Architecture Design

## Overview

```
                 AI-Pet
                    |
 ------------------------------------------------
 |                 |                 |
Pet Engine       AI Engine       System Engine
 |                 |                 |
Animation      Provider Layer    Monitor
 |
Event Bus
 |
Plugin / Storage / Pet Pack
```

## Runtime

Electron Main Process:

- PetEngine
- AIService
- EventBus
- SystemMonitor
- PluginManager
- StorageService

Renderer:

- React UI
- PixiJS animation

## Main Modules

### PetEngine

Controls pet life cycle and state.

### EventBus

Unified event communication.

### AnimationEngine

Maps states to animations.

### AIService

Supports:

- OpenAI
- Claude
- Gemini
- DeepSeek
- Qwen
- Ollama
- LiteLLM

### SystemMonitor

Monitors:

- CPU
- Memory
- Application status
- File events
