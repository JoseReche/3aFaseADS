const database = require('../config/database')

class User {
    constructor() {
        this.model = database.db.define('users', {
            id: { 
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nome: {
                type: database.db.Sequelize.STRING,
                validate: {
                    len: {
                        args: [3, 20], // Limite mínimo de 3 e máximo de 20 caracteres
                        msg: "O campo nome deve ter entre 3 e 20 caracteres"
                    }
                }
            },
            email: {
                type: database.db.Sequelize.STRING,
                allowNull: false,
                unique: true, // Garante que o e-mail seja único
                validate: {
                    isEmail: {
                        msg: "O campo e-mail deve conter um endereço de e-mail válido"
                    }
                }
            },
            senha: {
                type: database.db.Sequelize.STRING
            }
        })
    }
}

module.exports = (new User()).model