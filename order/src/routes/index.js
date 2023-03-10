import express from "express";
import pedidos from "./ordersRoute.js"

const routes = (app) => {
   app.use(express.json(), pedidos)
}

export default routes