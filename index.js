const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.status(200).send({ msg: "Hola Gastón!" })
})

app.post("/welcome", (req, res) => {
    const { username } = req.body;
    res.status(200).send({ msg: `Bienvenido, ${username}`})
})

app.listen(PORT, () => {
    console.log(`Tu server está listo en el puerto ${PORT}`)
})