const express = require('express');
const app = express();
const mongoose = require('mongoose');
const catRoutes = require('./routes/cats');
const PORT = 3000;


app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send({message: 'helloo'})
})

app.listen(
    PORT, () => console.log(`server is listening on http://localhost:${PORT}`)
);