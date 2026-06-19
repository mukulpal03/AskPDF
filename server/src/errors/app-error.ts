import {
  FormatError,
  InvalidPDFException,
  PasswordException,
} from "pdf-parse";

type ErrorWithStatus = Error & {
  status?: number;
  statusCode?: number;
  lc_error_code?: string;
};

export class AppError extends Error {
  readonly statusCode: number;

  constructor(
    message: string,
    statusCode: number,
    options?: { cause?: unknown },
  ) {
    super(message, { cause: options?.cause });
    this.name = "AppError";
    this.statusCode = statusCode;
  }

  static badRequest(message: string): AppError {
    return new AppError(message, 400);
  }

  static fromUnknown(error: unknown): AppError {
    if (error instanceof AppError) {
      return error;
    }

    if (error instanceof Error) {
      return new AppError(error.message, resolveStatusCode(error), {
        cause: error,
      });
    }

    return new AppError(String(error), 500);
  }
}

function resolveStatusCode(error: Error): number {
  if (
    error instanceof InvalidPDFException ||
    error instanceof PasswordException ||
    error instanceof FormatError
  ) {
    return 422;
  }

  const candidate = error as ErrorWithStatus;
  const upstreamStatus = candidate.status ?? candidate.statusCode;

  if (upstreamStatus !== undefined) {
    if (upstreamStatus >= 500 || upstreamStatus === 429) {
      return upstreamStatus === 429 ? 503 : 502;
    }
    if (upstreamStatus >= 400) {
      return 502;
    }
  }

  if (
    candidate.lc_error_code === "MODEL_RATE_LIMIT" ||
    candidate.lc_error_code === "MODEL_AUTHENTICATION" ||
    candidate.lc_error_code === "MODEL_NOT_FOUND"
  ) {
    return candidate.lc_error_code === "MODEL_RATE_LIMIT" ? 503 : 502;
  }

  if (/^\d{3}\s/.test(error.message)) {
    return 502;
  }

  return 500;
}
