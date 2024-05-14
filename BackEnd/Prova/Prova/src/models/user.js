const database = require('../config/database');

class User {
    constructor() {//cria o construtor de usuario
        this.model = database.define('users', {//define no banco de dados as linhas com os tipos de dados
            id: {
                type: database.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nome: {
                type: database.Sequelize.STRING
            },
            email: {
                type: database.Sequelize.STRING
            },
            senha: {
                type: database.Sequelize.STRING
            }
        });
    }
}

module.exports = (new User).model;