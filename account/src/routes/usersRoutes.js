import express from "express";
import userController from "../controllers/userController.js";
import passport from "passport";

const router = express.Router();

router
    .get("/api/admin/users", passport.authenticate("bearer", { session: false }), userController.listarUsuarios)
    .get("/api/admin/users/:id", userController.listarUsuarioPorID)
    .post("api/users/login", passport.authenticate("local", { session: false }), userController.login)
    .post("/api/admin/users", userController.cadastrarUsuario)
    .put("/api/admin/users/:id", passport.authenticate("bearer", { session: false }), userController.atualizarUsuario)
    .delete("/api/admin/users/:id", passport.authenticate("bearer", { session: false }), userController.excluirUsuario)

export default router;