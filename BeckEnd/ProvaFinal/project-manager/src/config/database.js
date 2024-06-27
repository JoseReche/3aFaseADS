const { Sequelize } = require('sequelize')

class Database {
    constructor() {
        this.init()
    }

    init() {
        this.db = new Sequelize({
            database: 'GestorTarefas',
            host: 'localhost',
            username: 'root',
            dialect: 'mysql'
        })    
    }
}

module.exports = new Database()