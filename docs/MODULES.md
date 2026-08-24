# Core Module Design

## PetEngine

The single source of truth for pet state.

Responsibilities:

- State management
- Behavior decision
- Growth calculation
- State transition

## EventBus

Central event communication layer.

All cross-module communication should use events.

## AnimationEngine

Responsible for converting pet state into visual behavior.

Input:

PetState

Output:

Animation Action

## AIService

Unified AI access layer.

Responsibilities:

- Model communication
- Streaming response
- Usage tracking

## SystemMonitor

Observes operating system information.

Examples:

- CPU
- Memory
- Application status
- File events

## PluginManager

Manages extension capabilities.
