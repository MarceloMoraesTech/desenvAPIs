const express = require('express');
const deskscontroller = require('./controllers/desksController');

const router = express.Router();

router.get('/reservas',deskscontroller.getAll);
router.get('/estacoes_trabalho',deskscontroller.getAllDesks);

router.post('/estacoes_trabalho',deskscontroller.criarReserva);

router.delete('/deletar/:id',deskscontroller.deleteReserva);

router.put('/reservas/:id',deskscontroller.updateReserva);


module.exports = router;