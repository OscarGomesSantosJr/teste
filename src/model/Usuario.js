const conectar = require("../database/conexao");

class Usuario {
  constructor({ nome, idade }) {
    this.nome = nome;
    this.idade = idade;
  }

  async cadastrar() {
    try {
      const [cadastro] = await conectar("usuario")
        .insert({
          nome: this.nome,
          idade: this.idade,
        })
        .returning("nome");
      return cadastro;
    } catch (error) {
      return error;
    } finally {
      conectar.destroy;
    }
  }
}
module.exports = Usuario;
