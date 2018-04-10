/**
 * Responsável por carregar os arquivos de configuração
 */

const server = require('./config/server')
require('./config/database')
require('./config/routes')(server)