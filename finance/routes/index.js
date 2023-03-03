const bodyParser = require('body-parser');
const pagamentos = require('./pagamentosRoute.js')

const routes = (app) => {
    app.use(bodyParser.json())
    app.use(pagamentos)
}

module.exports = routes;