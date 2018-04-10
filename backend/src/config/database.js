/**
 * Responsável por efetuar a configuração e abrir conexão com o MONGODB
 */

 // Responsável por efetuar o mapeamento e conexão com o mongo
 const mongoose = require('mongoose')

// Fazer a api do mongoose utilizar as promise do node
mongoose.Promise = global.Promise

// Exporta a conexão com o banco toDo
module.exports = mongoose.connect('mongodb://localhost/toDo')