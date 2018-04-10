/** 
 * Responsável pela configuração do servidor 
 *  
*/

// Definição da porta do servidor
const port = 3003

// Parser responsável do servidor
const bodyParser = require('body-parser')

// Servidor Web Express
const express = require('express')

// Instancia do servidor
const server = express()

// Sempre que chegar uma requisição que usa o padrão URLEncoded o bodyParser será responsável por por fazer os parser
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

// Habilita o cors
const allowCors = require('./cors')

server.use(allowCors)

//Registro de porta
server.listen(port, function () {
    console.log(`BACKEND is running on port ${port}.`)
})

module.exports = server