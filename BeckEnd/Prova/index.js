const express = require('express');

const app = express();
app.use(express.json());

const usuarios = [];
const postagens = [];

app.get('/', (req, res) => {
    res.send('Hello World');
});


app.get('/usuario', (req, res) => {
    res.json(usuarios);
})
app.post('/usuario', (req, res) => {
    const { nome, email } = req.body;

    let id = 0;

    for (const usuario of usuarios) {
        if (usuario.id > id) {
            id = usuario.id;
        }
    }

    const usuario = {
        id: id + 1,
        nome, 
        email
    } 
    usuarios.push(usuario)

    res.status(201).json(usuario)
})
app.put('/usuario/:id', (req, res) => {
    const { id } = req.params;
    const { nome, email } = req.body;
    
    const index = usuarios.findIndex(u => u.id === Number(id));

    if (index === -1) {
        return res.status(404).json({ error: 'Usuário não encontrado'})
    }

    usuarios[index] = {
        id: Number(id),
        nome,
        email
    }

    res.status(200).json(usuarios[index]);
})
app.delete('/usuario/:id', (req, res) => {
    const { id } = req.params;

    const index = usuarios.findIndex(u => u.id === Number(id));

    if (index === -1) {
        return res.status(404).json({ error: 'Usuário não encontrado'})
    }

    usuarios.splice(index, 1);

    res.status(204).send();
})



app.get('/usuario/postagem', (req, res) => {
    res.json(postagens);
})
//postagem por id usuario
app.get('/usuario/postagem/busca/:id', (req, res) => {
    const id = req.params.id;
    const postagem = postagens.find(u => u.id === Number(id));
    if (!postagem) {
        res.status(404).send('Postagem não encontrada');
    } else {
        res.status(200).json(postagem);
    }
})

app.post('/usuario/postagem', (req, res) => {
    const { id_usuario, titulo, conteudo} = req.body;

    let id = 0;

    for (const postagem of postagens) {
        if (postagem.id > id) {
            id = postagem.id;
        }
    }

    const postagem = {
        id: id + 1,
        id_usuario, 
        titulo,
        conteudo
    } 
    postagens.push(postagem)

    res.status(201).json(postagem)
})
app.get('/usuario/:id/postagem', (req, res) => {
    const { id } = req.params;
 
    // Encontrar o usuário pelo ID
    const usuario = usuarios.find(u => u.id === Number(id));
 
    if (!usuario) {
        return res.status(404).json({ error: 'Usuário não encontrado' });
    }
 
    // Filtrar as postagens pelo autorId igual ao ID do usuário
    const postagensUsuario = postagens.filter(postagem => postagem.id_usuario === usuario.id);
 
    res.json(postagensUsuario);
});+
app.delete('/usuario/postagem/:id', (req, res) => {
    const { id } = req.params;

    const index = postagens.findIndex(u => u.id === Number(id));

    if (index === -1) {
        return res.status(404).json({ error: 'Postagem não encontrada'})
    }

    postagens.splice(index, 1);

    res.status(204).send();
})






app.listen(3000, () => {
    console.log('Server is running on port 3000');
})