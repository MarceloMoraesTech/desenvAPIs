const desksModel = require('../models/desksModel'); 

const getAll = async (request, response) => {
  const reservas = await desksModel.getAll();
  return response.status(200).json({reservas});
};

const getAllDesks = async (request, response) => {
  const desks = await desksModel.getAllDesks();
  return response.status(200).json({desks});
};


const criarReserva = async (request, response) =>{
  const reservaCriada = await desksModel.criarReserva(request.body);
  return response.status(201).json(reservaCriada);

};

const deleteReserva = async (request, response) => {
  const {reserva_id} = request.params.reserva_id;
  
  await desksModel.deleteReserva(reserva_id);

  return response.status(204).json();

};

module.exports = {
  getAll,
  getAllDesks,
  criarReserva,
  deleteReserva
};