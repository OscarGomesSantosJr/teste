const express = require('express');
const conectar = require("./database/conexao");

const app = express();

app.get('/home', (req, res) =>{
    res.contentType("Content-Type/html");
    res.status(200).send('<h1>BOM DIA</h1>');
})

app.get('/usuario', (requ, res) => {
    const usuario = [
        {
            nome: "Jonas",
            idade: "41",
        },
        {
            nome: "Carlos Silva",
            idade: "80",
        }
    ]
})

const port = '8080';

app.listen(port, () => console.log(`Rodando na porta ${port} !!`));

try {
    
} 
catch () {
    
}

module.exports = app;