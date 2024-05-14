const Post = require('../models/post'); 
const User = require('../models/user'); 

class PostController {
    async validarPostagem(titulo,conteudo,autorID) {
        
    }
    async criarPostagem(titulo, conteudo, autorID) {
        if (
            titulo === undefined
            || conteudo === undefined
            || autorID === undefined
        ) {
            throw new Error('titulo, conteudo e senha são obrigatórios');
        }else{
            const validTitulo = await Post.findOne({ where: { titulo }});
            const validConteudo = await Post.findOne({ where: { conteudo }});
            const validUser = await User.findByPk(autorID);

            if(!validUser){
                throw new Error('Autor não cadastrado');
            }else if(validTitulo||validConteudo){
                throw new Error('Postagem já existe');
            }else{
                const post = await Post.create({ titulo, conteudo, autorID });
                return post;
            }
        }
        
    }
   
    async buscarPorId(id) {
        if (id === undefined) {
            throw new Error('Id é obrigatório');
        }

        const post = await Post.findByPk(id);

        if (!post) {
            throw new Error('Usuário não encontrado');
        }
        return post;
    }

    async alterarPostagem(id, titulo, conteudo, autorID) {
        if (
            titulo === undefined
            || conteudo === undefined
            || autorID === undefined
        ) {
            throw new Error('titulo, conteudo e autor ID são obrigatórios');
        }

        const post = await this.buscarPorId(id);
        post.titulo = titulo;
        post.conteudo = conteudo;
        post.autorID = autorID;
        
        post.save();

        return post;
    }

    async deletarPostagem(id) {
        if (id === undefined) {
            throw new Error('Id é obrigatório');
        }

        const post = await this.buscarPorId(id);

        post.destroy();
    }

    async listarPostagens() {
        return Post.findAll();
    }
}
 
module.exports = PostController;