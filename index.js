require ('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const catRoutes = require('./routes/CatRoute');
const catController = require('./controllers/CatController');
const PORT = 3000;


app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('X-Debug-Request', req.method);
    console.log(req.method, req.originalUrl);
    next();
});

mongoose.connect(process.env.MONGO_URI).then(() => console.log("Database connected"));

app.delete('/cats/:id', catController.deleteCat);
app.use('/cats', catRoutes);

console.log(app.router.stack.map(layer => layer.route ? {
    path: layer.route.path,
    methods: Object.keys(layer.route.methods)
} : null).filter(Boolean));



app.listen(
    PORT, () => console.log(`server is listening on http://localhost:${PORT}`)
);