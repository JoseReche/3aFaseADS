const database = require('../config/database');

class City {
    constructor() {
        this.model = database.define('cities', {
            id: {
                type: database.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nome: {
                type: database.Sequelize.STRING
            },
            siglaEstado: {
                type: database.Sequelize.STRING
            },
            kmQd: {
                type: database.Sequelize.INTEGER
            }
        });
    }
}

module.exports = (new City).model;
