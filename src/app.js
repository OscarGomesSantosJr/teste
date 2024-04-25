const express = require('express');
const conectar = require("./database/conexao");

const app = express();
const routes = express.Router();

routes.get('/home', (req, res) =>{
    res.contentType("Content-Type/html");
    res.status(200).send('<h1>BOM DIA</h1>');
})

routes.post('/gravador', (request, response) => {
    const form = async () => {

        console.log(request);

        try {
            conectar('usuario').insert({
                nome:'Pedro', 
                idade:'18'
        
        }).then(()=> {
            console.log('Dados inseridos na tabela"usuario" com sucesso:');
        }).catch (error => {
            console.error('Erro ao inserir dados:', error)
        });
        
        } 
        catch (error) {
            
        }
    }
})

const port = '8080';

app.listen(port, () => console.log(`Rodando na porta ${port} !!`));

module.exports = app;