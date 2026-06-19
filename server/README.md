# server

Express API server for chat-with-pdf, run with [Bun](https://bun.com).

## Setup

```bash
bun install
cp .env.example .env
```

## Run

```bash
bun run dev
```

For production:

```bash
bun run start
```

## Health check

```bash
curl http://localhost:3001/api/v1/health
```

Expected response: `{"status":"ok"}`
