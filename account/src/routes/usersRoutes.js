import express from "express";
import userController from "../controllers/userController.js";
import { authBearer, authLocal } from "../middlewares/auth.js"

const router = express.Router();

router
    .get("/api/admin/users", authBearer, userController.listarUsuarios)
    .get("/api/admin/users/:id", userController.listarUsuarioPorID)
    .post("api/users/login", authLocal, userController.login)
    .post("/api/admin/users", userController.cadastrarUsuario)
    .put("/api/admin/users/:id", authBearer, userController.atualizarUsuario)
    .delete("/api/admin/users/:id", authBearer, userController.excluirUsuario)

export default router;