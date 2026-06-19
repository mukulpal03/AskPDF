import { Document } from "@langchain/core/documents";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { ragConfig } from "../config/rag.ts";
import type { ProcessedDocument } from "../types/document.ts";
import { extractTextFromPdf } from "./pdf.service.ts";
import { addDocumentChunks } from "./vector-store.service.ts";

export async function processDocumentUpload(
  file: Express.Multer.File,
): Promise<ProcessedDocument> {
  const text = await extractTextFromPdf(file.path);

  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: ragConfig.chunkSize,
    chunkOverlap: ragConfig.chunkOverlap,
  });

  const chunks = await splitter.splitDocuments([
    new Document({
      pageContent: text,
      metadata: { source: file.filename },
    }),
  ]);

  await addDocumentChunks(chunks);

  return {
    id: file.filename,
    fileName: file.originalname,
    fileSize: file.size,
    storedName: file.filename,
  };
}
