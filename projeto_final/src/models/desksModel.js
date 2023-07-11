const connection = require('./connection');

const getAll = async () => {
  const [reservas] = await connection.execute('SELECT * FROM reservas');
  return reservas;

};

const getAllDesks = async () => {
  const [desks] = await connection.execute('SELECT * FROM estacoes_trabalho');
  return desks;

};

const criarReserva = async (reserva) => {
  const { codIlha, estacao_id, funcionario_id, setor_id } = reserva;

  const data_hora = new Date().toISOString();
  
  const query = 'INSERT INTO reservas(codIlha, estacao_id, funcionario_id, setor_id, data_hora) VALUES (?,?,?,?,?)';

  // eslint-disable-next-line no-undef
  const params = [codIlha, estacao_id, funcionario_id, setor_id, data_hora];

  const [reservaCriada] = await connection.execute(query,params);

  return {insertId: reservaCriada.insertId};

};
 
const deleteReserva = async (id) => {

  const [reservaRemovida] = await connection.execute('DELETE FROM reservas WHERE reserva_id = ?', [id]);
  return reservaRemovida;
};
  
module.exports = {
  getAll,
  getAllDesks,
  criarReserva,
  deleteReserva
};