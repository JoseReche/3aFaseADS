class User {

    static users = [];

    constructor(nome, email, senha, id) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        
        if (!id) {
            let generateId = 0;
            for(const user of User.users) {
                if(user.id > id) {
                    generateId = user.id;
                }
            }
            this.id = generateId + 1
            User.users.push(this);
        } else {
            this.id = id;
        }
    }
}

module.exports = User;