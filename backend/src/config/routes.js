const express = require('express')

module.exports = function (server) {
    const router = express.Router()

    server.use('/api', router)

    const to_doService = require('../api/todo/todoService')
    to_doService.register(router, '/todos')
}