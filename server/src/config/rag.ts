export const ragConfig = {
  chunkSize: 200,
  chunkOverlap: 50,
  embeddingModel: "text-embedding-3-large",
  collectionName: "documents",
  qdrantUrl: process.env.QDRANT_URL ?? "",
};
