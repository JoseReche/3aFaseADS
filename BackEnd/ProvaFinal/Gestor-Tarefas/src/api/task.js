const TaskController = require('../controllers/task')
const cookieParser = require('cookie-parser');

class TaskApi {
    
    async createTask(req, res) {
        const { titulo, descricao, id_projeto } = req.body
        try {
            const task = await TaskController.createTask(titulo, descricao, id_projeto)
            return res.status(201).send(task)
        } catch (e) {
            return res.status(400).send({ error: `Erro ao criar uma tárefa ${e.message}`})
        }
    }

    async updateTask(req, res) {
        const { id } = req.params
        const { titulo, descricao, status, id_projeto } = req.body

        try {
            const task = await TaskController.update(Number(id), titulo, descricao, status, id_projeto)
            return res.status(200).send(task)
        } catch (e) {
            return res.status(400).send({ error: `Erro ao alterar tárefa ${e.message}`})
        }
    }

    async deleteTask(req, res) {
        const { id } = req.params

        try {
            await TaskController.delete(Number(id))
            return res.status(204).send()
        } catch (e) {
            return res.status(400).send({ error: `Erro ao deletar tárefa ${e.message}`})
        }
    }

    async findTasks(req, res) {
        try {
            const tasks = await TaskController.find()
            return res.status(200).send(tasks)
        } catch (e) {
            return res.status(400).send({ error: `Erro ao listar tárefa ${e.message}`})
        }
    }

    async validateCookie(req, res, next) {
        const cookie = req.headers.cookies;

        try {
            TaskController.getCookie(cookie)
            next()
        } catch (e) {
            res.status(400).send({ error: e.message })
        }
    }
    async filterTask(req, res){
        const { id_projeto } = req.params;
        const { status } = req.query;

        try {
            const task = await TaskController.filter(Number(id_projeto),status)
            return res.status(200).send(task)
        } catch (e) {
            return res.status(400).send({ error: `Erro ao filtrar tárefa ${e.message}`})
        }
    
    }
}

module.exports = new TaskApi()