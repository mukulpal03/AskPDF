import { env } from "./env.ts";

export const ragConfig = {
  chunkSize: 1000,
  chunkOverlap: 400,
  embeddingModel: "text-embedding-3-large",
  chatModel: "gpt-5-nano",
  retrievalLimit: 5,
  collectionName: "documents",
  qdrantUrl: env.qdrantUrl,
};
