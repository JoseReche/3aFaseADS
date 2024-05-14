const UserController = require('../controllers/user');
const jwt = require('jsonwebtoken');

class UserApi {
    async criarUsuario(req, res) {
        const nome = req.body.nome//pega as informaçoes digitadas no Postman / json
        const email = req.body.email;//pega as informaçoes digitadas no Postman / json
        const senha = req.body.senha;//pega as informaçoes digitadas no Postman / json
        const controller = new UserController();

        try {
            const user = await controller.criarUsuario(nome, email, senha);//chama a função criarUsuario criada nos controles 
            return res.status(201).send(user);
        } catch (error) {
            return res.status(400).send({ error: error.message }) 
        }
    }

    async alterarUsuario(req, res) {
        const { id } = req.params;
        const { nome, email, senha } = req.body;
        const controller = new UserController();

        try {
            const user = await controller.alterarUsuario(Number(id), nome, email, senha);//chama a função alterarUsuario criada nos controles 
            return res.status(200).send(user);
        } catch (error) {
            return res.status(400).send({ error: error.message })
        }
    }

    async deletarUsuario(req, res) {
        const { id } = req.params;
        const controller = new UserController();

        try {
            await controller.deletarUsuario(Number(id));//chama a função deletarUsuario criada nos controles 
            return res.status(204).send();
        } catch (error) {
            return res.status(400).send({ error: error.message })
        }
    }

    async listarUsuario(req, res) {
        const controller = new UserController();
    
        try {
            const users = await controller.listarUsuarios();//chama a função listarUsuarios criada nos controles 
            return res.status(200).send(users);
        } catch (error) {
            return res.status(400).send({ error: error.message })
        }
    }

    async logarUsuario(req, res) {
        const email = req.body.email;
        const senha = req.body.senha;
        const controller = new UserController();

        try {
            const user = await controller.logarUsuario(email, senha);//chama a função alterarUsuario criada nos controles 
            
            const token = jwt.sign({ usuario: user }, chaveSecreta, { expiresIn: '1h' });
            // Enviar o token para o cliente
            
            return res.setHeader('Authorization', `Bearer ${token}`).status(200).send({ token });
        } catch (error) {
            return res.status(400).send({ error: error.message })
        }
    }
}
module.exports = UserApi;