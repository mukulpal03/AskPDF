import { Router } from "express";
import chatRouter from "./chat.route.ts";
import documentsRouter from "./documents.route.ts";
import healthRouter from "./health.route.ts";

const v1Router = Router();

v1Router.use(healthRouter);
v1Router.use(documentsRouter);
v1Router.use(chatRouter);

export default v1Router;
