import app from './src/app.js'

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Servidor executando em http://localhost:${port}`)
})