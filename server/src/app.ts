import cors from "cors";
import express from "express";
import v1Router from "./routes/v1/index";
import { errorHandler } from "./middleware/error-handler.ts";

const app = express();

app.use(cors({ origin: process.env.CLIENT_URL ?? "http://localhost:3000" }));
app.use(express.json());

app.use("/api/v1", v1Router);
app.use(errorHandler);

export default app;
