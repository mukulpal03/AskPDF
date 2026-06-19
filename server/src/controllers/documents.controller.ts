import type { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/app-error.ts";
import { processDocumentUpload } from "../services/document.service.ts";

export async function uploadDocument(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  if (!req.file) {
    next(AppError.badRequest("No file uploaded."));
    return;
  }

  try {
    const result = await processDocumentUpload(req.file);
    res.status(201).json({ ...result, message: "File uploaded successfully" });
  } catch (error) {
    next(AppError.fromUnknown(error));
  }
}
