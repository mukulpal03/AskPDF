"use client";

import { useCallback, useState } from "react";
import { uploadDocument } from "@/lib/api/documents";
import { validatePdfFile } from "@/lib/dashboard/validate-pdf";

export function useDocumentUpload() {
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const upload = useCallback(async (file: File) => {
    setError(null);
    setSuccessMessage(null);

    const validationError = validatePdfFile(file);
    if (validationError) {
      setError(validationError);
      return;
    }

    setIsUploading(true);

    try {
      const result = await uploadDocument(file);
      setSuccessMessage(
        `${result.fileName} uploaded. Check the server uploads folder.`,
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to upload file");
    } finally {
      setIsUploading(false);
    }
  }, []);

  return { upload, isUploading, error, successMessage };
}
