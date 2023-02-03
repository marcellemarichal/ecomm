import express from "express";
import categorias from "./categoriesRoutes.js"
import produtos from "./productsRoutes.js"

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: "Ecomm Categories"})
    })

    app.use(
        express.json(),
        categorias,
        produtos
    )
}

export default routes