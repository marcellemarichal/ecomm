import express from "express";
import Categoria from "./categoriesRoutes.js"
import Produto from "./productsRoutes.js"

const routes = (app) => {
   app.use(express.json(), Categoria, Produto)
}

export default routes