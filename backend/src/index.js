const express = require("express");
const routes = require("./routes");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

const HOST = "localhost";
const PORT = 3333;

app.listen(PORT, HOST, function(err) {
  if (err) return console.log(err);
  console.log("Listening at http://%s:%s", HOST, PORT);
});
/**
 * Métodos HTTP:
 *
 * GET: Buscar uma informação no backend
 * POST: Criar uma informação no backend
 * PUT: Alterar uma informação no backend
 * DELETE: Deletar uma informação no backend
 */

/**
 * Tipos de parâmetros:
 * Query Params: Parâmetros nomeados enviados na rota após o símbolo "?" (Filtros, paginação) - request.query
 * Route Params: Parâmetros utilizados para identificar recursos - request.params
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos - request.body
 */

/**
 * Bancos de dados:
 *
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server...
 * NoSQL: MongoDB, CouchDB, etc
 *
 * Métodos de uso:
 * Driver: SELECT * FROM tabela WHERE ...;
 * Query Builder: table('tabela').select('*').where(...)
 */
