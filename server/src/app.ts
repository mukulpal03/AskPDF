import "./config/env.ts";
import cors from "cors";
import express from "express";
import v1Router from "./routes/v1/index";
import { errorHandler } from "./middleware/error-handler.ts";
import { env } from "./config/env.ts";

const app = express();

app.use(cors({ origin: env.clientUrl }));
app.use(express.json());

app.use("/api/v1", v1Router);
app.use(errorHandler);

export default app;
