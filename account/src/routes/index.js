import express from "express";
import usuarios from "./usersRoutes.js"

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: "Ecomm Users"})
    })

    app.use(
        express.json(),
        usuarios
    )
}

export default routes