require ('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const catRoutes = require('./routes/CatRoute');
const PORT = 3000;


app.use(express.json());

mongoose.connect(process.env.MONGO_URI).then(() => console.log("Database connected"));

app.use('/cats', catRoutes);



app.listen(
    PORT, () => console.log(`server is listening on http://localhost:${PORT}`)
);