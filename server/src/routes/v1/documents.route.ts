import { Router } from "express";
import { uploadDocument } from "../../controllers/documents.controller.ts";
import { pdfUpload } from "../../middleware/upload.ts";

const documentsRouter = Router();

documentsRouter.post("/documents", pdfUpload.single("file"), uploadDocument);

export default documentsRouter;
