const User = require('../model/user');

class UserController {
    criarUsuario(nome, email, senha) {
        if (
            nome === undefined
            || email === undefined
            || senha === undefined
        ) {
            throw new Error('Nome, email e senha são obrigatórios');
        }

        return new User(nome, email, senha);
    }

    buscarPorId(id) {
        if (id === undefined) {
            throw new Error('Id é obrigatório');
        }

        const user = User.users.findIndex(u => u.id === id);

        if (user === -1) {
            throw new Error('Usuário não encontrado');
        }

        return user;
    }

    alterarUsuario(id, nome, email, senha) {
        if (
            id === undefined
            || nome === undefined
            || email === undefined
            || senha === undefined
        ) {
            throw new Error('Id, nome, email e senha são obrigatórios');
        }

        const index = this.buscarPorId(id);

        const user = new User(nome, email, senha, id);
        User.users[index] = user;

        return user;
    }

    deletarUsuario(id) {
        if (id === undefined) {
            throw new Error('Id é obrigatório');
        }

        const index = this.buscarPorId(id);

        User.users.splice(index, 1);
    }

    listarUsuarios() {
        return User.users;
    }
}

module.exports = UserController;