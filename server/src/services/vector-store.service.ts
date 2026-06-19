import type { Document } from "@langchain/core/documents";
import { vectorStore } from "../lib/rag.ts";

export async function addDocumentChunks(chunks: Document[]): Promise<void> {
  await vectorStore.addDocuments(chunks);
}
