const database = require('../config/database');

class Post {
    constructor() {
        this.model = database.define('postagens', {
            id: {
                type: database.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            titulo: {
                type: database.Sequelize.STRING
            },
            conteudo: {
                type: database.Sequelize.STRING
            },
            autorID: {
                type: database.Sequelize.INTEGER,
            }
        });
    }
}

module.exports = (new Post).model;