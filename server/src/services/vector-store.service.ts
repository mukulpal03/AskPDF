import type { Document } from "@langchain/core/documents";
import { OpenAIEmbeddings } from "@langchain/openai";
import { QdrantVectorStore } from "@langchain/qdrant";
import { ragConfig } from "../config/rag.ts";

export async function addDocumentChunks(chunks: Document[]): Promise<void> {
  const embeddings = new OpenAIEmbeddings({
    model: ragConfig.embeddingModel,
  });

  const vectorStore = await QdrantVectorStore.fromExistingCollection(embeddings, {
    url: ragConfig.qdrantUrl,
    collectionName: ragConfig.collectionName,
  });

  await vectorStore.addDocuments(chunks);
}
