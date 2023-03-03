import bodyParser from "body-parser"
import pagamentos from "./pagamentosRoute.js"

const routes = (app) => {
    app.use(bodyParser.json())
    app.use(pagamentos)
}

export default routes