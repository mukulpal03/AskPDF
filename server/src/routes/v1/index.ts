import { Router } from "express";
import healthRouter from "./health.route.ts";
import documentsRouter from "./documents.route.ts";

const v1Router = Router();

v1Router.use(healthRouter);
v1Router.use(documentsRouter);

export default v1Router;
