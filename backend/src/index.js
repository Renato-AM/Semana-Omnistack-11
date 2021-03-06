const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/*
 * Rota / Recurso
 */

/*
 * Método HTTP:
 *
 * GET: Buscar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 * 
 */

/*
 * Tipos de parâmetros:
 * 
 * Query params: parâmetros nomeados enviados na rota após o '?' (Filtros, paginação)
 * Route params: parâmetros utilizados para identificar recursos
 * Request body: corpo da requisição, utilizado para criar ou alterar recursos 
 */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc...
 */

/**
 * Driver: SELECT * FORM USERS
 * Query Builder: table('users').select('*').where()
 */



app.listen(3333);