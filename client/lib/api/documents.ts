import { API_BASE_URL } from "@/lib/api/config";

export type UploadDocumentResponse = {
  id: string;
  fileName: string;
  fileSize: number;
  storedName: string;
  message: string;
};

type ApiErrorBody = {
  message?: string;
};

export async function uploadDocument(
  file: File,
): Promise<UploadDocumentResponse> {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch(`${API_BASE_URL}/api/v1/documents`, {
    method: "POST",
    body: formData,
  });

  const data = (await response.json().catch(() => ({}))) as
    | UploadDocumentResponse
    | ApiErrorBody;

  if (!response.ok) {
    const message =
      "message" in data && data.message
        ? data.message
        : "Failed to upload file";
    throw new Error(message);
  }

  return data as UploadDocumentResponse;
}
