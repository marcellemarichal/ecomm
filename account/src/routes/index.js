import express from "express";
import usuarios from "./usersRoutes.js"

const routes = (app) => {
    app.use(express.json(), usuarios)
}

export default routes