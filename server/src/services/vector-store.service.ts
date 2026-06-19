import type { Document } from "@langchain/core/documents";
import { ragConfig } from "../config/rag.ts";
import { vectorStore } from "../lib/rag.ts";

export type RetrievedChunk = {
  content: string;
  metadata: Record<string, unknown>;
};

export async function addDocumentChunks(chunks: Document[]): Promise<void> {
  await vectorStore.addDocuments(chunks);
}

export async function retrieveRelevantChunks(
  query: string,
  limit = ragConfig.retrievalLimit,
): Promise<RetrievedChunk[]> {
  const documents = await vectorStore.similaritySearch(query, limit);

  return documents.map((doc) => ({
    content: doc.pageContent,
    metadata: doc.metadata,
  }));
}
