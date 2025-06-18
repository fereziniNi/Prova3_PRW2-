import { Router } from "express";
import alunoRoutes from  "./alunoRoutes.js";
import authenticateRoutes from "./authenticateRoutes.js";

const routes = Router();

routes.use("/alunos", alunoRoutes);
routes.use("/", authenticateRoutes);

export default routes;