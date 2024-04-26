const express = require("express");
const conectar = require("./database/conexao");
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/home", (request, response) => {
  //console.log("teste");
  //response.contentType("Content-Type/html");
  response.status(200).send("<h1>BOM DIA</h1>");
});

app.post("/gravador", (request, response) => {
  console.log(request.body);
  //const form = async () => {};
});

const port = 8080;

app.listen(port, () => console.log(`Rodando na porta ${port} !!`));

module.exports = app;

/*
try {
      conectar("usuario")
        .insert({
          nome: "Pedro",
          idade: "18",
        })
        .then(() => {
          console.log('Dados inseridos na tabela"usuario" com sucesso:');
        })
        .catch((error) => {
          console.error("Erro ao inserir dados:", error);
        });
    } catch (error) {    
        
    }

    response.status(200).json(usuarios);

    console.log(request);
*/
