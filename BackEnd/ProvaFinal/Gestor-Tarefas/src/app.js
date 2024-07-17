const express = require('express')
const cors = require('cors')
const database = require('./config/database')
const cookieParser = require('cookie-parser');

const UserApi = require('./api/user')
const UserRouter = require('./routes/user')

const TaskRouter = require('./routes/task')

const ProjectRouter = require('./routes/project')

const app = express()
app.use(cookieParser());
app.use(express.json());

//Set use cors
app.use(cors());

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello World' })
})

// Rotas sem token
app.post('/api/v1/login', UserApi.login)
app.post('/api/v1/user', UserApi.createUser)

// Rotas com token
app.use(UserApi.validateToken)
app.use('/api/v1/user', UserRouter)
app.use('/api/v1/task', TaskRouter)
app.use('/api/v1/project', ProjectRouter)

database.db.sync()

    .then(()=> {
        app.listen(8000, () => {
            console.log('Server running on port 8000')
        })
    })
    .catch(err => {
        console.error(`Erro ao inicializar o banco de dados ${err}`)
    })
module.exports = app;