# AI Provider Design

## Purpose

Provide unified access to different AI providers.

## Interface

```ts
interface AIProvider {
 chat();
 stream();
 getUsage();
}
```

## Supported Providers

- OpenAI
- Claude
- Gemini
- DeepSeek
- Qwen
- Ollama
- LiteLLM

## Token Food

AI token consumption is converted into pet food resources.
