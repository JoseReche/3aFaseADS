const database = require('../config/database')

class Project {
    constructor() {
        this.model = database.db.define('projects', {
            id: { 
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nome: {
                type: database.db.Sequelize.STRING
            },
            descricao: {
                type: database.db.Sequelize.STRING
            },
            id_usuario: {
                type: database.db.Sequelize.STRING
            }
        })
    }
}

module.exports = (new Project()).model