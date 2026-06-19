import { env } from "./env.ts";

export const ragConfig = {
  chunkSize: 1000,
  chunkOverlap: 400,
  embeddingModel: "text-embedding-3-large",
  collectionName: "documents",
  qdrantUrl: env.qdrantUrl,
};
