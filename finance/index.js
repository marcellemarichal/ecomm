const express = require('express');
const routes = require('./routes/index.js');

const app = express()
const port = 3000

routes(app)

app.listen(port, () => console.log(`App rodando na porta ${port}`))

module.exports = app