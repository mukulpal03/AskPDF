function requireEnv(name: string): string {
  const value = process.env[name]?.trim();

  if (!value) {
    console.error(`Error: ${name} environment variable is required.`);
    process.exit(1);
  }

  return value;
}

export const env = {
  port: Number(process.env.PORT) || 3001,
  clientUrl: process.env.CLIENT_URL ?? "http://localhost:3000",
  openaiApiKey: requireEnv("OPENAI_API_KEY"),
  qdrantUrl: requireEnv("QDRANT_URL"),
};
