import { Router } from "express";
import healthRouter from "./health.route.ts";

const v1Router = Router();

v1Router.use(healthRouter);

export default v1Router;
