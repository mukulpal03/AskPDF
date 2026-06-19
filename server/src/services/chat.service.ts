import { ragConfig } from "../config/rag.ts";
import { openai } from "../lib/openai.ts";
import { retrieveRelevantChunks } from "./vector-store.service.ts";

function buildSystemPrompt(context: Awaited<ReturnType<typeof retrieveRelevantChunks>>): string {
  return `
You are a helpful assistant that can answer questions about the documents provided.
The documents are:
${JSON.stringify(context, null, 2)}
`.trim();
}

export async function generateChatResponse(message: string): Promise<string> {
  const context = await retrieveRelevantChunks(message);

  const SYSTEM_PROMPT = buildSystemPrompt(context);

  const response = await openai.responses.create({
    model: ragConfig.chatModel,
    input: message,
    instructions: SYSTEM_PROMPT,
  });

  return response.output_text;
}
