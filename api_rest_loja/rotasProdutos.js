var express = require('express');
var router = express.Router();

var knex = require('./knex'); // Importar o query builder

//LISTAR PRODUTOS
router.get('/', (req, res, next) => {
    knex('produtos').then((dados) => {
        res.status(200).send(dados);
    }, next);
});

//BUSCAR PRODUTOS PELO ID
router.get('/:id', (req, res, next) => {
    const id = req.params.id; //INCLUIR JOIN ANTES DO WHERE - FAZER RELAÇÃO ENTRE CHAVES DAS TABELAS
    knex('produtos').where('id', id).first().then((dados) => {
        if (!dados) {
            return res.status(400).send('Este produto não foi encontrado');
        }
        res.status(200).send(dados);
    }, next);
});

//CADASTRAR PRODUTOS
router.post('/add', (req, res, next) => {
    knex('produtos').insert(req.body).then((dados) => {
        res.status(200).send(dados);
    }, next);
});

//ATUALIZAR PRODUTOS
router.put('/update/:id', (req, res, next) => {
    const id = req.params.id;
    knex('produtos').where('id', id).update(req.body).then((dados) => {
        if (!dados) {
            return res.status(400).send('Este produto não foi encontrado');
        }
        res.sendStatus(200).send(dados);
    }, next);
});

//DELETAR PRODUTOS
router.delete('/delete/:id', (req, res, next) => {
    const id = req.params.id;
    knex('produtos').where('id', id).delete().then((dados) => {
        if (!dados) {
            return res.status(400).send('Este produto não foi encontrado');
        }
        res.sendStatus(200).send(dados);
    }, next);
});

module.exports = router;

