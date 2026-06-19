import type { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/app-error.ts";
import { generateChatResponse } from "../services/chat.service.ts";

export async function chat(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  const { message } = req.body;

  if (typeof message !== "string" || !message.trim()) {
    next(AppError.badRequest("Message is required."));
    return;
  }

  try {
    const reply = await generateChatResponse(message);
    res.json({ message: reply });
  } catch (error) {
    next(AppError.fromUnknown(error));
  }
}
