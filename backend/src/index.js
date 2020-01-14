const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://marcelo:37ob9eyt@cluster0-y7agp.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json())
app.use(routes);


// TIPOS DE PARÂMETROS EXPRESS:
// Query Params: request.query (filtros, ordenação, paginação, etc) // GET
// Route Params: request.params (identificar um recurso na alteração ou remoção) // PUT, DELETE
// Body: request.body (dados para criação ou alteração de um registro) // POST, PUT

app.listen(3333);