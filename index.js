const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const port  = process.env.PORT || 8080;

const about = require("./JSON/about.json")
const portafolio = require("./JSON/Portafolio.json")

app.get('/about', (req, res) => {
    res.json(about)
})


app.get('/portafolio', (req, res) => {
    res.json(portafolio)
})

// es un texto que se levanto el puerto
app.listen(port, () => {
    console.log(`Server on : ${port}`)
});