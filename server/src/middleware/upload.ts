import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination(_req, _file, cb) {
    cb(null, "uploads/");
  },
  filename(_req, file, cb) {
    const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    cb(null, uniqueName + path.extname(file.originalname));
  },
});

function isPdf(file: Express.Multer.File): boolean {
  return (
    file.mimetype === "application/pdf" ||
    file.originalname.toLowerCase().endsWith(".pdf")
  );
}

export const pdfUpload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter(_req, file, cb) {
    if (isPdf(file)) {
      cb(null, true);
      return;
    }
    cb(new Error("Only PDF files are allowed."));
  },
});
