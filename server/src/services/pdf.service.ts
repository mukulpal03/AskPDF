import { PDFParse } from "pdf-parse";

export async function extractTextFromPdf(filePath: string): Promise<string> {
  const parser = new PDFParse({ url: filePath });

  try {
    const { text } = await parser.getText();
    return text;
  } finally {
    await parser.destroy();
  }
}
