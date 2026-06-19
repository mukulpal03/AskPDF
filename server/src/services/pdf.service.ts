import { PDFParse } from "pdf-parse";

export async function extractTextFromPdf(filePath: string): Promise<string> {
  const parser = new PDFParse({ url: filePath });
  const { text } = await parser.getText();
  return text;
}
