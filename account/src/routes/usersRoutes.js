import express from "express";
import userController from "../controllers/userController.js";

const router = express.Router();

router
    .get("/api/admin/users", userController.listarUsuarios)
    .get("/api/admin/users/:id", userController.listarUsuarioPorID)
    .post("/api/admin/users", userController.cadastrarUsuario)
    .put("/api/admin/users/:id", userController.atualizarUsuario)
    .delete("/api/admin/users/:id", userController.excluirUsuario)

export default router;