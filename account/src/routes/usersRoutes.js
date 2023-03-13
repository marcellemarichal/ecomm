import express from "express";
import UserController from "../controllers/userController.js";
import { authBearer, authLocal } from "../middlewares/auth.js"

const router = express.Router();

router
    .get("/api/admin/users", authBearer, UserController.listarUsuarios)
    .get("/api/admin/users/:id", UserController.listarUsuarioPorID)
    .post("api/users/login", authLocal, UserController.login)
    .post("/api/admin/users", UserController.cadastrarUsuario)
    .put("/api/admin/users/:id", authBearer, UserController.atualizarUsuario)
    .delete("/api/admin/users/:id", authBearer, UserController.excluirUsuario)

export default router;