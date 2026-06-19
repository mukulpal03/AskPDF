import { Router } from "express";
import type { NextFunction, Request, Response } from "express";
import multer from "multer";
import { uploadDocument } from "../../controllers/documents.controller.ts";
import { pdfUpload } from "../../middleware/upload.ts";

const documentsRouter = Router();

documentsRouter.post("/documents", pdfUpload.single("file"), uploadDocument);

documentsRouter.use(
  (err: unknown, _req: Request, res: Response, _next: NextFunction): void => {
    if (err instanceof multer.MulterError) {
      if (err.code === "LIMIT_FILE_SIZE") {
        res.status(413).json({
          message: "File exceeds the 10 MB limit. Try a smaller PDF.",
        });
        return;
      }
      res.status(400).json({ message: err.message });
      return;
    }

    if (err instanceof Error) {
      res.status(400).json({ message: err.message });
      return;
    }

    res.status(500).json({ message: "Upload failed." });
  },
);

export default documentsRouter;
