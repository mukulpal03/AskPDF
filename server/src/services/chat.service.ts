import { ragConfig } from "../config/rag.ts";
import { AppError } from "../errors/app-error.ts";
import { openai } from "../lib/openai.ts";
import { retrieveRelevantChunks } from "./vector-store.service.ts";

function buildSystemPrompt(context: Awaited<ReturnType<typeof retrieveRelevantChunks>>): string {
  const formattedContext = context
    .map((chunk, i) => `[${i + 1}] ${chunk.content}`)
    .join('\n\n');
  
  return `You are a helpful assistant that can answer questions about the documents provided.
  Relevant document excerpts:
  ${formattedContext}`.trim();
}

export async function generateChatResponse(message: string): Promise<string> {
  const context = await retrieveRelevantChunks(message);

  if (context.length === 0) {
    throw AppError.badRequest("No relevant documents found for the query");
  }

  const SYSTEM_PROMPT = buildSystemPrompt(context);

  const response = await openai.responses.create({
    model: ragConfig.chatModel,
    input: message,
    instructions: SYSTEM_PROMPT,
  });

  return response.output_text;
}
