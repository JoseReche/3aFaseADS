const user = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser');

const SECRET_KEY = 'segundaavaliacao'
const SALT_VALUE = 10

class UserController {
    async createUser(nome, email, senha) {
        const emailValid = await user.findAll({where: {email:email}});
        if (emailValid.length > 0) {
            throw new Error('Usuário já cadastrado nesse email: '+email);
        }
        const cypherSenha = await bcrypt.hash(senha, SALT_VALUE)
       
        const userValue = await user.create({
            nome,
            email,
            senha: cypherSenha
        })

        return userValue
    }

    async findUser(id) {
        if (id === undefined) {
            throw new Error('Id é obrigatório.')
        }

        const userValue = await user.findByPk(id)
        
        if (!userValue) {
            throw new Error('Usuário não encontrado.')
        }

        return userValue
    }

    async update(userLogado, nome, email, senha) {
        if(userLogado === undefined){
            throw new Error('Precisa estar logado para alterar usuario')
        }
        if (userLogado === undefined || nome === undefined || email === undefined || senha === undefined) {
            throw new Error('Nome, email e senha são obrigatórios.')
        }

        const userValue = await this.findUser(userLogado)

        userValue.nome = nome
        userValue.email = email
        userValue.senha = await bcrypt.hash(senha, SALT_VALUE)
        userValue.save()

        return userValue
    }


    async find(userLogado) {
        return user.findByPk(userLogado)
    }

    async delete() {
        user.findByPk(userLogado)
        user.destroy();
        Cookies.remove('userId');
        Cookies.remove('token');
        return 
    }

    async find(userLogado) {
        return user.findByPk(userLogado)
    }

    async login(email, senha,test) {

        
        if (email === undefined || senha === undefined) {
            throw new Error('Email e senha são obrigatórios.')
        }

        const userValue = await user.findOne({ where: { email }})

        if (!userValue) {
            throw new Error('Usuário inválido.')
        }

        const senhaValida = bcrypt.compare(senha, userValue.senha) 
        if (!senhaValida) {
            throw new Error('Senha inválido.')
        }

        const token = jwt.sign({ id: userValue.id }, SECRET_KEY, { expiresIn: 60 * 60 })

        const userLogado = {
            id: userValue.id,
            token: token
        }

        return  userLogado
    }

    async validateToken(token) {
        if (!token) {
            throw new Error('Token inválido')
        }

        try {
            await jwt.verify(token, SECRET_KEY)
        } catch {
            throw new Error('Token inválido')
        }
    }
} 

module.exports = new UserController()
