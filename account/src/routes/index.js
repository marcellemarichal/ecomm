import express from "express";
import Usuario from "./usersRoutes.js"

const routes = (app) => {
    app.use(express.json(), Usuario)
}

export default routes