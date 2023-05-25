var knex = require('knex')({
    client: 'mysql',
    connection: {
        host: "localhost",
        user: "root",
        password: "",
        database: "serv_loja_online"
    }
});

module.exports = knex;