const User = require('../models/user'); 
//const bcrypt = require('bcrypt');//criptografa as senhas
//const saltRounds = 10;// numero que usamos para fazer a criptografia


class UserController {
    
    async criarUsuario(nome, email, senha) {
        if (
            nome === undefined
            || email === undefined
            || senha === undefined
        ) {//se não for digitado nome, email ou senha da erro e cai aqui
            throw new Error('Nome, email e senha são obrigatórios');
        }

        const validNome = await User.findOne({ where: { nome }});
        const validEmail = await User.findOne({ where: { email }});

        if(validNome||validEmail){
            throw new Error('Usuario ja cadastrad com esse nome, email');
        }else{
            //como seria se fosse direto no Banco de dados INSERT INTO users (nome, email, senha) VALUES (nome, email, senha);
            const user = await User.create({ nome, email, senha });
            return user;
        }
    }
   // const senhaCriptografada = await bcrypt.hash(saltRounds);

    async buscarPorId(id) {//busca o usuario por seu ID dentro do banco de dados
        if (id === undefined) {
            throw new Error('Id é obrigatório');// se o ID não for incerido cai aqui
        }

        const user = await User.findByPk(id);// vai fazer a busca no Banco

        if (!user) {
            throw new Error('Usuário não encontrado');// se não encontrar 
        }
        return user;
    }

    async alterarUsuario(id, nome, email, senha) {// Altera o usuario com base no ID
        if (
            id === undefined
            || nome === undefined
            || email === undefined
            || senha === undefined
        ) {//se não for digitado nome, email ou senha da erro e cai aqui
            throw new Error('Id, nome, email e senha são obrigatórios');
        }

        const user = await this.buscarPorId(id); //usa a função criada anteriormente para buscar o usuario com base no ID
        //subistitui os dados do banco pelos dados passados pelo usuario
        user.nome = nome;
        user.email = email;
        user.senha = senha;
        // como seria se fosse direto no Banco de dados UPDATE users SET nome = nome, email = email, senha = senha WHERE id = id;
        user.save();//salva o usuario depois de alterado no Banco de dados

        return user;
    }

    async deletarUsuario(id) {//Deleta o usuario do Banco de dados
        if (id === undefined) {
            throw new Error('Id é obrigatório');//se não for incerido o ID cai aqui
        }

        const user = await this.buscarPorId(id);//usa a função criada anteriormente para buscar o usuario com base no ID

        user.destroy();// Retira o usuario do banco de dados
    }

    async listarUsuarios() {//Lista todos os usuarios do banco de dados
        return User.findAll();
    }

    async logarUsuario(email, senha) {
        if(email === undefined || senha === undefined){
            throw new Error('Email e senha são obrigatórios');
        }else{
            const usuario = await User.findOne({ where: { email }});
            if(usuario.senha !== senha) {
                throw new Error('Senha incorreta favor digitar uma senha valida');
            }else{
                return usuario;
            }
        }
    }
}
 
module.exports = UserController;