import type { Request, Response } from "express";

export function uploadDocument(req: Request, res: Response): void {
  if (!req.file) {
    res.status(400).json({ message: "No file uploaded." });
    return;
  }

  res.status(201).json({
    id: req.file.filename,
    fileName: req.file.originalname,
    fileSize: req.file.size,
    storedName: req.file.filename,
    message: "File uploaded successfully",
  });
}
