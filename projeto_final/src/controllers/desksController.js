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
  const {id} = request.params;
  
  await desksModel.deleteReserva(id);

  return response.status(204).json();
};

const updateReserva = async (request, response) => {
  const { id } = request.params;

  await desksModel.updateReserva(id, request.body);
  return response.status(204).json();
};

module.exports = {
  getAll,
  getAllDesks,
  criarReserva,
  deleteReserva,
  updateReserva
};