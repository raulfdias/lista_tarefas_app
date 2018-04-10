/**
 * Responsável por mapear o objeto para o documento do mongo
 */

const restful = require('node-restful')

// O node-restful gera uma API RESTFUL pronta
const mongoose = restful.mongoose

const toDoSchema = new mongoose.Schema({
    description: { type: String, required: true },
    done: { type: Boolean, default: false, required: true },
    createdAt: { type: Date, default: Date.now, required: true }
})

module.exports = restful.model('Todo', toDoSchema)