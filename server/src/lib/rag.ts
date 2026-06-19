import { OpenAIEmbeddings } from "@langchain/openai";
import { QdrantVectorStore } from "@langchain/qdrant";
import { env } from "../config/env.ts";
import { ragConfig } from "../config/rag.ts";

export const embeddings = new OpenAIEmbeddings({
  model: ragConfig.embeddingModel,
  apiKey: env.openaiApiKey,
});

export const vectorStore = await QdrantVectorStore.fromExistingCollection(
  embeddings,
  {
    url: ragConfig.qdrantUrl,
    collectionName: ragConfig.collectionName,
  },
);
