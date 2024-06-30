const ProjectController = require('../controllers/project')

class ProjectApi {
    async createProject(req, res) {
        const { nome, descricao} = req.body
        const id_usuario = req.cookies.userId;

        try {
            const project = await ProjectController.createProject(nome, descricao, id_usuario)
            return res.status(201).send(project)
        } catch (e) {
            return res.status(400).send({ error: `Erro ao criar um projeto ${e.message}`})
        }
    }

    async updateProject(req, res) {
        const { id } = req.params
        const { nome, descricao} = req.body
        const id_usuario = req.cookies.userId;
        try {
            const project = await ProjectController.update(Number(id), nome, descricao, id_usuario)
            return res.status(200).send(project)
        } catch (e) {
            return res.status(400).send({ error: `Erro ao alterar o Projeto ${e.message}`})
        }
    }

    async deleteProject(req, res) {
        const { id } = req.params
        const id_usuario = req.cookies.userId;

        try {
            await ProjectController.delete(Number(id),id_usuario)
            return res.status(204).send()
        } catch (e) {
            return res.status(400).send({ error: `Erro ao deletar o Projeto  ${e.message}`})
        }
    }

    async exitProject(req, res) {
        const { id } = req.params
        const id_usuario = req.cookies.userId;

        try {
            await ProjectController.delete(Number(id),id_usuario)
            return res.status(204).send()
        } catch (e) {
            return res.status(400).send({ error: `Erro ao deletar o Projeto  ${e.message}`})
        }
    }

    async findProjects(req, res) {
        const id_usuario = req.cookies.userId;
        try {
            const projects = await ProjectController.find(id_usuario)
            return res.status(200).send(projects)
        } catch (e) {
            return res.status(400).send({ error: `Erro ao listar os Projetos  ${e.message}`})
        }
    }

}

module.exports = new ProjectApi()