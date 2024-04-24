const knex = require('knex');
const configuracao = require('../../knexfile');

const conexao = knex(configuracao, 
    (error) => {
        if (error) {
            return console.log(
                'Erro ao conectar no Banco de Dados', error
            );
        }
        return console.log("Conexao ao banco realizada com sucesso!");
    }
);

module.exports = conexao;