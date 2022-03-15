const express = require("express");
const cors = require("cors");
const db = require("./config/database");

const app = express();

// Middleware JSON
app.use(express.json());

// Middleware CORS
app.use(cors());

/*
    Verbos HTTP:
    --------------------------
    GET -> Retornar dados
    POST -> Cadastrar dados
    PUT -> Editar dados
    PATCH -> Editar dados
    DELETE -> Excluir dados
*/
/*
    Status code:
    ---------------------------------
    200 -> retornar ok
    201 -> Inserido com sucesso
    400 -> Erro (cliente)
    401 -> não autorizado
    404 -> não encontrado
    500 -> Erro (servidor)
*/

// Rotas
app.get("/produtos/cardapio", function (request, response) {

    let ssql = "select c.descricao as categoria, p.* ";
    ssql += "from produto p ";
    ssql += "join produto_categoria c on (c.id_categoria = p.id_categoria) ";
    ssql += "order by c.ordem";

    db.query(ssql, function (err, result) {
        if (err) {
            response.status(500).send(err);

        } else {
            return response.status(200).json(result);
        }
    });
});

app.post("/pedidos", function (request, response) {

    /* let ssql = "select c.descricao as categoria, p.* ";
     ssql += "from produto p ";
     ssql += "join produto_categoria c on (c.id_categoria = p.id_categoria) ";
     ssql += "order by c.ordem";
 
     db.query(ssql, function (err, result) {
         if (err) {
             response.status(500).send(err);
 
         } else {
             return response.status(200).json(result);
         }
     });*/
});

app.get("/pedidos", function (request, response) {

    /* let ssql = "select c.descricao as categoria, p.* ";
     ssql += "from produto p ";
     ssql += "join produto_categoria c on (c.id_categoria = p.id_categoria) ";
     ssql += "order by c.ordem";
 
     db.query(ssql, function (err, result) {
         if (err) {
             response.status(500).send(err);
 
         } else {
             return response.status(200).json(result);
         }
     });*/
});

app.get("/configs", function (request, response) {

    /* let ssql = "select c.descricao as categoria, p.* ";
     ssql += "from produto p ";
     ssql += "join produto_categoria c on (c.id_categoria = p.id_categoria) ";
     ssql += "order by c.ordem";
 
     db.query(ssql, function (err, result) {
         if (err) {
             response.status(500).send(err);
 
         } else {
             return response.status(200).json(result);
         }
     });*/
});


app.listen(3000, function () {
    console.log('Servidor no ar na porta 3000');
});