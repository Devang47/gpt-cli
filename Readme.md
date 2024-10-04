# GPT CLI

This is a simple serverless function I created to cheat in college practical exams.

## Working

This function is deployed to supabase and uses the Replicate API ([Meta-llama 3 model](https://replicate.com/meta/meta-llama-3-8b-instruct)) to generate code for the given problem statement.

## Cli usage

```bash
curl -X POST https://****.supabase.co/functions/v1/code -d '{"query":"give me code in c++ for newton raphson method"}'
```
