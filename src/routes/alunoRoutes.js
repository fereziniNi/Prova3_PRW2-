import express from "express";
import AlunoController from "../controllers/alunoController.js";
import authenticateJWT from "../middleware/jws_config.js";

const routes = express.Router();
routes.use(authenticateJWT);
routes.get("/", AlunoController.listarAlunos);
routes.get("/medias", AlunoController.mediasIndividuais);
routes.get("/medias/:id", AlunoController.mediaPorId);
routes.get("/aprovados", AlunoController.aprovados);
routes.get("/:id", AlunoController.listarAlunoPorId);
routes.post("/", AlunoController.cadastrarAluno);
routes.put("/:id", AlunoController.atualizarAluno);
routes.delete("/:id", AlunoController.excluirAluno);



export default routes;
