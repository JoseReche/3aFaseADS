const task = require('../models/task')
const project = require('../models/project')

class TaskController {
    async createTask(titulo, descricao, id_projeto) {
        if (titulo === undefined || 
            descricao === undefined ||
            id_projeto === undefined) {
            throw new Error('Título, Descrição, Status e id_projeto são obrigatórios.')
        }
        const projectValue = await project.findByPk(id_projeto);
        if (!projectValue) {
            throw new Error('Projeto não encontrado.');
        }
        const status = "pendente";
        const taskValue = await task.create({
            titulo,
            descricao,
            status,
            data_conclusao: null,
            id_projeto
        })

        return taskValue
    }

    async findTask(id) {
        if (id === undefined) {
            throw new Error('Id é obrigatório.')
        }

        const taskValue = await task.findByPk(id)
        
        if (!taskValue) {
            throw new Error('Tarefa não encontrado.')
        }

        return taskValue
    }
    

    async update(id, titulo, descricao, status, id_projeto) {
        if (!id||!titulo||!descricao ||!status ||!id_projeto ) {
            throw new Error('Id, título, Descrição, Status e id_projeto são obrigatórios.')
        }

        const taskValue = await this.findTask(id)
    
        taskValue.titulo = titulo
        taskValue.descricao = descricao
        taskValue.status = status
        taskValue.id_projeto = id_projeto
        taskValue.save()

        return taskValue
    }

    async delete(id) {
        if (id === undefined) {
            throw new Error('Id é obrigatório.')
        }
        const taskValue = await this.findTask(id)
        taskValue.destroy()

        return
    }

    async find() {
       
        /*if (id === undefined) {
            throw new Error('Id é obrigatório.')
        }

        const taskValue = await task.findByPk(id)
        
        if (!taskValue) {
            throw new Error('Tarefa não encontrado.')
        }*/
        return task.findAll()

        //return taskValue
    }

    async filter(id_projeto,status){
        if (isNaN(id_projeto)) {
            throw new Error('O ID do projeto deve ser um número.');
        }
        
        if(status){
            return await task.findAll({
                where: {
                id_projeto: id_projeto,
                status: status
                }
            });
        } else {
            return await task.findAll({
                where: {
                    id_projeto: id_projeto
                }
            });
        }
        //return tasks;
    }

} 

module.exports = new TaskController()