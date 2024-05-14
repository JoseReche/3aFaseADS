const Sequelize = require('sequelize'); // chama o sequelize

const database = new Sequelize(//estipula os dados de logion e qual será o banco
    'livraria',
    'root',
    '',
    { host: 'localhost', dialect: 'mysql' }
)

module.exports = database;