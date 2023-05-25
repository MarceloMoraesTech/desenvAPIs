var express = require('express');
var router = express.Router();

var knex = require('./knex'); // Importar o query builder

router.get('/', (req, res, next) => {
    knex('produtos').then((dados) => {
        res.status(200).send(dados);
    }, next);
});

router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    knex('produtos').where('id', id).first().then((dados) => {
        if (!dados) {
            return res.status(400).send('Este produto não foi encontrado');
        }
        res.status(200).send(dados);
    }, next);
});

router.post('/add', (req, res, next) => {
    knex('produtos').insert(req.body).then((dados) => {
        res.status(200).send(dados);
    }, next);
});

router.put('/update/:id', (req, res, next) => {
    const id = req.params.id;
    knex('produtos').where('id', id).update(req.body).then((dados) => {
        if (!dados) {
            return res.status(400).send('Este produto não foi encontrado');
        }
        res.sendStatus(200).send(dados);
    }, next);
});

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

