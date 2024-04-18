const knex = require('knex');
const configuracao = require('../../knexfile');

const conexao = knex(configuracao);

module.exports = conexao;