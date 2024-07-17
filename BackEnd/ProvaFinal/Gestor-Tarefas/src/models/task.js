const database = require('../config/database')

class Task {
    constructor() {
        this.model = database.db.define('tasks', {
            id: { 
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            titulo: {
                type: database.db.Sequelize.STRING,
                validate: {
                    len: {
                        args: [1, 50], // Limite mínimo de 1 e máximo de 50 caracteres
                        msg: "O campo Titulo deve ter entre 1 e 50 caracteres"
                    }
                }
            },
            descricao: {
                type: database.db.Sequelize.STRING,
                validate: {
                    len: {
                        args: [10, 50], // Limite mínimo de 10 e máximo de 100 caracteres
                        msg: "O campo Descrição deve ter entre 10 e 100 caracteres"
                    }
                }
            },
            id_projeto: {
                type: database.db.Sequelize.INTEGER, 
                allowNull: false,
                references: {
                    model: 'projects',
                    key: 'id'
                }
            },
            status: { 
                type: database.db.Sequelize.STRING,
                validate: {
                    isIn: {
                        args: [['pendente', 'em andamento', 'concluída']],
                        msg: 'O status deve ser pendente, em andamento ou concluída'
                    }
                }
            },
            data_conclusao:{
                type: database.db.Sequelize.DATE,
                allowNull: true
            }
        },{
            hooks: {
                beforeCreate: async (task, options) => {
                    const project = await database.db.models.projects.findOne({
                        where: { id: task.id_projeto }
                    });
                    
                    if (!project) {
                        throw new Error('Projeto não encontrado');
                    }

                    if (project === undefined) {
                        throw new Error('Tarefas só podem ser criadas para projetos ativos');
                    }
                },
                beforeSave: (task, options) => {
                    if (task.status === 'concluída') {
                        task.data_conclusao = new Date();
                    }
                }
            }
        })
    }
}

module.exports = (new Task()).model