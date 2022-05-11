const express = require('express')
const routes = require('./routes')
const app = express()
app.use(express.json())
app.use(routes)




/*
METODOS HTTP:

*GET: Buscar/listar uma informação do back-end
*POST: Criar uma informação no back-end
*PUT: Alterar uma informação no back-end
*DELETE: Deletar uma informação no back-end
*/
//--------//-------//

/*
*Tipos de parametros:
* 
*Query: paramentros nomeador enviados na rota após "?" (filtros, paginação)
*Routr Params: Pâmetros utilizados para indentificar recursos
*Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
*/
/*
* SQL: MySQL, SQLite, PostgreSQL, Orecle, Microsoft SQL Server
*NoSQL: MongoDB, CouchDB, etc
*/



app.listen(3333)