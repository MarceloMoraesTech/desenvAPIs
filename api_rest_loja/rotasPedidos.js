var express = require('express');
var router = express.Router();

var knex = require('./knex'); // Importar o query builder

//LISTAR PEDIDOS
router.get('/', (req, res, next) => {
    knex('pedidos').then((dados) => {
        res.status(200).send(dados);
    }, next);
});

//CADASTRAR PEDIDOS
router.post('/add', (req, res, next) => {
    knex('pedidos').insert(req.body).then((dados) => {
        res.status(200).send(dados);
    }, next);
});


module.exports = router;