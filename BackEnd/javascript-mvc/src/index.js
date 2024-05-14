const express = require('express');
const UserApi = require('./api/user');
const database = require('./config/database');

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send({ response: 'Hello World!' });
})
const userApi = new UserApi();

app.get('/users', userApi.listarUsuario);
app.post('/users', userApi.criarUsuario);
app.put('/users/:id', userApi.alterarUsuario);
app.delete('/users/:id', userApi.deletarUsuario);

database.sync({ force: true })
    .then(() => {
        app.listen(3000, () => {
            console.log('Server is running on port 3000')
        })
    })
    .catch((error) => {
        console.error('Error connecting to the database', error);
    });

