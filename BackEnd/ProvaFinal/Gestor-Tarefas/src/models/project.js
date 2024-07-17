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
                type: database.db.Sequelize.STRING,
                validate: {
                    len: {
                        args: [5, 50], // Limite mínimo de 5 e máximo de 50 caracteres
                        msg: "O campo nome deve ter entre 5 e 50 caracteres"
                    }
                }
            },
            descricao: {
                type: database.db.Sequelize.STRING,
                validate: {
                    len: {
                        args: [10, 100], // Limite mínimo de 10 e máximo de 100 caracteres
                        msg: "O campo Descrção deve ter entre 10 e 100 caracteres"
                    }
                }
            },
            id_usuario: {
                type: database.db.Sequelize.STRING
            }
        })
    }
}

module.exports = (new Project()).model