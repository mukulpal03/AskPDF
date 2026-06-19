import type { NextFunction, Request, Response } from "express";
import { processDocumentUpload } from "../services/document.service.ts";

export async function uploadDocument(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  if (!req.file) {
    res.status(400).json({ message: "No file uploaded." });
    return;
  }

  try {
    const result = await processDocumentUpload(req.file);
    res.status(201).json({ ...result, message: "File uploaded successfully" });
  } catch (error) {
    next(error);
  }
}
