const Usuario = require("../models/Usuario");

module.exports = {
    async cadastrarUsuario(request, response){
        const usuario = new Usuario(request.body);
        if(!usuario.nome || !usuario.email || !usuario.senha){
            return response.status(401).json({ error: 'Usuário incompleto, preencha todos os campos' });
        }
        else {
            const cadastrar = await usuario.cadastrar();
            return response.json(cadastrar);
        }
    },
};