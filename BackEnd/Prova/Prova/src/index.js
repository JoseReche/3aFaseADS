const express = require('express');
const UserApi = require('./api/user');
const PostApi = require('./api/post');
const database = require('./config/database');


const app = express();
app.use(express.json());

app.get('/', (_, res) => {
    res.send({response:'**** * ** ** quem ta lendo'});
});

const userApi = new UserApi();
const postApi = new PostApi();

//app.get('/user', userApi.logarUsuario);

app.get('/users', userApi.listarUsuario);
app.post('/users', userApi.criarUsuario);
app.put('/users/:id', userApi.alterarUsuario);
app.delete('/users/:id', userApi.deletarUsuario);


app.get('/posts', postApi.listarPostagens);
app.post('/posts', postApi.criarPostagem);
app.put('/posts/:id', postApi.alterarPostagem);
app.delete('/posts/:id', postApi.deletarPostagem);

database.sync()
    .then(() => {
        app.listen(3000, () => {
            console.log('Server is running on port 3000')
        })
    })
    .catch((error) => {
        console.error('Error connecting to the database', error);
    });


//!!!!!--------------------------------------------------------------------------


/*

{
    "name": "Joinville",
    "acronymState": "SC",
    "area": 200.000,
    "numPeople": 321.000
}

*/


