import express from "express";
import categorias from "./categoriesRoutes.js"

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: "Ecomm Categories"})
    })

    app.use(
        express.json(),
        categorias
    )
}

export default routes