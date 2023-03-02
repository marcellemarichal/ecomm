import bodyParser from "body-parser"
import pagamentos from "./pagamentosRoute.js"
import express from "express";

const routes = (app) => {
    app.use(bodyParser.json())
    app.use(express.json(), pagamentos)
}

export default routes