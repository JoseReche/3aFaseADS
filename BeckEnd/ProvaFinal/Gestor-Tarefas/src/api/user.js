const UserController = require('../controllers/user')

class UserApi {
    async createUser(req, res) {
        const { nome, email, senha } = req.body

        try {
            if (!nome) {
                throw new Error('Nome, é obrigatório.')
            }else if (!email) {
                throw new Error('Email, é obrigatório.')
            } else if (!senha) {
                throw new Error('Sena, é obrigatório.')
            }
            const user = await UserController.createUser(nome, email, senha)
            return res.status(201).send(user)
        } catch (e) {
            console.log(e)
            return res.status(400).send({ error: `Erro ao criar usuário ${e.message}`})
        }
    }

    async updateUser(req, res) {
        const { nome, email, senha } = req.body
        const userLogado = req.cookies.user_id;

        try {
            const user = await UserController.update(Number(userLogado), nome, email, senha)
            return res.status(200).send(user)
        } catch (e) {
            return res.status(400).send({ error: `Erro ao alterar usuário ${e.message}`})
        }
    }

    async deleteUser(req, res) {
        const userLogado = req.cookies.userId;

        try {
            await UserController.delete(Number(userLogado))

            res.clearCookie('userId', { httpOnly: true, secure: true });
            res.clearCookie('token', { httpOnly: true, secure: true });
            return res.status(204).send();
        } catch (e) {
            return res.status(400).send({ error: `Erro ao deletar usuário ${e.message}`})
        }
    }

    async exitUser(req, res) {
        try {
            res.clearCookie('userId', { httpOnly: true, secure: true });
            res.clearCookie('token', { httpOnly: true, secure: true });
            return res.status(204).send();
        } catch (e) {
            return res.status(400).send({ error: `Erro ao Deslogar usuário ${e.message}`})
        }
    }

    async findUsers(req, res) {
        const userLogado = req.cookies.userId;
        try {
            const users = await UserController.find(userLogado)
            return res.status(200).send(users)
        } catch (e) {
            return res.status(400).send({ error: `Erro ao listar usuário ${e.message}`})
        }
    }

    async login(req, res) {
        const { email, senha } = req.body

        try {
            const user = await UserController.login(email, senha)
            
            res.cookie('userId', user.id, { httpOnly: true, secure: true });
            res.cookie('token', user.token, { httpOnly: true, secure: true });
            res.status(200).send(user.token)
        } catch (e) {
            res.status(400).send({ error: e.message })
        }
    }

    async validateToken(req, res, next) {
        //const token = req.headers.authorization
        const token = req.cookies.token;

        try {
            await UserController.validateToken(token)
            next()
        } catch (e) {
            res.status(400).send({ error: e.message })
        }
    }
}

module.exports = new UserApi()