var express = require('express');
var router = express.Router();

var knex = require('./knex'); // IMPORTAR O QUERY BUILDER

//LISTAR CLIENTES
router.get('/', (req, res, next) => {
    knex('clientes').then((dados) => {
        res.status(200).send(dados);
    }, next);
});

//CADASTRO NOVO CLIENTE
router.post('/add', (req, res, next) => {
    knex('clientes').insert(req.body).then((dados) => {
        res.status(200).send(dados);
    }, next);
});



module.exports = router;