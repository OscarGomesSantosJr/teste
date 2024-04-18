const connection = require('../database/connection');

class Usuario {
    constructor({nome, idade}){
        this.nome                = nome
        this.idade               = idade
    }

    async cadastrar() {
        try {
            const [cadastro] = await connection('usuarios').insert({
                nome: this.nome,
                idade: this.idade,
            }).returning('nome');

            return {nome: cadastro};
        } 
        catch (error) {
            return error;
        } 
        finally {
            connection.destroy;
        }
    }
}
module.exports = Usuario;