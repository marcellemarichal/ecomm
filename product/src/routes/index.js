import express from "express";
import categorias from "./categoriesRoutes.js"
import produtos from "./productsRoutes.js"

const routes = (app) => {
   app.use(express.json(), categorias, produtos)
}

export default routes