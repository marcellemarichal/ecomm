const bodyParser = require('body-parser')
const pagamentos = require('./pagamentosRoute.js')

module.exports = app => {
    app.use(bodyParser.json())
    app.use(pagamentos)   
}