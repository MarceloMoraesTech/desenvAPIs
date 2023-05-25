var express = require('express');
var http = require('http');
var app = express();

var produtosRotas = require('./rotasProdutos');
var pedidosRotas = require('./rotasPedidos');
var clientesRotas = require('./rotasClientes');

app.get('/', (req, res) => {
    res.status(200).send('Bem-vindo ao API REST');
});

app.use(express.json());
app.use('/produtos', produtosRotas);
app.use('/pedidos', pedidosRotas);
app.use('/clientes', clientesRotas);


http.createServer(app).listen(8001, () => {
    console.log("Servidor iniciado em http://localhost:8001");
});