import express from "express";
import Pedido from "./ordersRoute.js"

const routes = (app) => {
   app.use(express.json(), Pedido)
}

export default routes