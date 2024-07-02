Documentação do projeto final do modulo de BackEnd 

+ Configuração de instalação das dependencias do (Node.js)

    # 1º Navegue até a pasta Gestor-Tarefas:
        execute o seguinte codigo apartir da pasta ULTIMAPROVAJAKSON
        Cd Gestor-Tarefas

    # 2º instale as seguintes dependencias:
        No Prompt de comando instale as dependencias 
            npm install
            npm install bcrypt 
            npm install cookie-parser 
            npm install cors
            npm install express
            npm install faker
            npm install jsonwebtoken
            npm install mysql2
            npm install nodemon
            npm install sequelize
            npm install supertest
            npm install jest 
            npm install nodemon

+ Para as requisições do postman siga os seguintes passos
    # Você pode fazer requisições de usuário com os seguintes passos: 
        1) Para criar um usuário para que possa acessar o sistema
            (1) METHOD (POST)   URL (http://localhost:8000/api/v1/user)

            (2) Selecione Body depois raw e no menu suspenso selecione a opção JSON

            (3) Dentro do Body agora coloque os seguintes dados:
                {
                    "nome":"Seu Nome",
                    "email":"SeuEmail@hotmail.com", // O Email deve conter "@"
                    "senha":"SuaSenha123" // A senha deve conter numeros
                }
            Está ação retornara um usuário criado que você pode usar para logar
        
        2) Para logar na API com um usuário já cadastrado 
            (1) METHOD (POST)   URL (http://localhost:8000/api/v1/login)

            (2) Selecione Body depois raw e no menu suspenso selecione a opção JSON

            (3) Dentro do Body agora coloque os seguintes dados:
                // Lembrando que nos campos a seguir os dados tem que ser referente a um usuário já criado.
                {
                    "nome":"Seu Nome",
                    "email":"SeuEmail@hotmail.com", // O Email deve conter "@"
                    "senha":"SuaSenha123" // A senha deve conter numeros
                }
            Está ação retornara um TOKEN e também direcionara o mesmo token para os cookies do postman junto com o usuário logado

        3) Para ver seu usuário você pode listar com o seguinte comando
            (1) METHOD (GET)   URL (http://localhost:8000/api/v1/user)

            Está ação retornara os dados do seu usuário logado.
        
        4) Para alterar os dados de um usuário já logado
            (1) METHOD (PUT)   URL (http://localhost:8000/api/v1/user)

            (2) Selecione Body depois raw e no menu suspenso selecione a opção JSON

            (3) Dentro do Body agora coloque os seguintes dados:
                {
                    "nome":"Seu Nome novo",
                    "email":"SeuEmailNOVO@hotmail.com", // O Email deve conter "@"
                    "senha":"SuaSenhaNOVA123" // A senha deve conter numeros
                }
            Está ação retornara o seu usuário alterado
        
        5) Para ver sair da API voce pode seguir os passos a seguir
            (1) METHOD (POST)   URL (http://localhost:8000/api/v1/user/exit)

            Está ação não retornará nada porem o seu usuário não estará mais logado na API.


    # Você pode fazer requisições de postagem com os seguintes passos: 
        1) Você pode criar um projeto 
            (1) METHOD (POST)   URL (http://localhost:8000/api/v1/project)

            (2) Selecione Body depois raw e no menu suspenso selecione a opção JSON

            (3) Dentro do Body agora coloque os seguintes dados:
                {
                    "nome":"Nome Projeto", // O nome tem um limite mínimo de 5 e máximo de 50 caracteres
                    "descricao":"Descricao do seu projeto" // A descrição tem um limite mínimo de 10 e máximo de 100 caracteres
                }
            Está ação retornara um Projeto criado deacordo com os dados inceridos e junto o ID do projeto.
        
        2) Você pode listar os projetos 
            (1) METHOD (GET)   URL (http://localhost:8000/api/v1/project)

            Está ação retornara uma lista de projetos criados deacordo com os dados registrados no Banco de Dados.
    
        3) Você pode alterar um projeto criado por você 
            (1) METHOD (PUT)   URL (http://localhost:8000/api/v1/project/1) // O numero "1" se refere ao ID do projeto que deseja alterar

            (2) Selecione Body depois raw e no menu suspenso selecione a opção JSON

            (3) Dentro do Body agora coloque os seguintes dados:
                {
                    "nome":"Nome Projeto Alterado", // O nome tem um limite mínimo de 5 e máximo de 50 caracteres
                    "descricao":"Descricao do seu projeto Alterado" // A descrição tem um limite mínimo de 10 e máximo de 100 caracteres
                }
            Está ação retornara um Projeto alterado deacordo com os dados inceridos.
        
        4) Você pode também deletar o projeto
            (1) METHOD (DELETE)   URL (http://localhost:8000/api/v1/project/1) // O numero "1" se refere ao ID do projeto que deseja alterar

            Está ação não retornará nada porém o usuário logado será deletado
    
    # Você pode fazer requisições de tarefa com os seguintes passos: 
        1) Você pode criar uma Tarefa 
            (1) METHOD (POST)   URL (http://localhost:8000/api/v1/task)

            (2) Selecione Body depois raw e no menu suspenso selecione a opção JSON

            (3) Dentro do Body agora coloque os seguintes dados:
                {
                    "titulo":"Seu Titulo", // O titúlo tem um limite mínimo de 1 e máximo de 50 caracteres
                    "descricao":"Sua descrição", // A descrição tem um limite mínimo de 10 e máximo de 100 caracteres
                    "id_projeto":1 // Aqui você deve colocar o ID de um projeto já criado 
                }
            Está ação retornara uma tarefa criada deacordo com os dados inceridos e junto o ID da tarefa.
        
        2) Você pode listar as Tarefas
            (1) METHOD (GET)   URL (http://localhost:8000/api/v1/task)

            Está ação retornara uma lista de tarefa criadas deacordo com os dados registrados no Banco de Dados.
        
        3) Você pode alterar um tarefa
            (1) METHOD (PUT)   URL (http://localhost:8000/api/v1/task/1) // O numero "1" se refere ao ID da tarefa que deseja alterar

            (2) Selecione Body depois raw e no menu suspenso selecione a opção JSON

            (3) Dentro do Body agora coloque os seguintes dados:
                {
                    "titulo":"Seu Titulo Novo", // O titúlo tem um limite mínimo de 1 e máximo de 50 caracteres
                    "descricao":"Sua descrição Nova", // A descrição tem um limite mínimo de 10 e máximo de 100 caracteres
                    "id_projeto":2 // Aqui você deve colocar o ID de um projeto já criado 
                }
            Está ação retornara uma tarefa alterada deacordo com os dados inceridos.

        4) Você pode também deletar uma tarefa
            (1) METHOD (DELETE)   URL (http://localhost:8000/api/v1/task/1) // O numero "1" se refere ao ID da tarefa que deseja deletar

            Está ação não retornará nada porém a tarefa selecionada será deletada

        5) Voce pode Filtrar as tarefas de acordo com alguns parametros
            @ Só por Porjeto
                (1) METHOD (GET)   URL (http://localhost:8000/api/v1/task/1) // O numero "1" se refere ao ID do projeto que de seseja usar de parametro para o filtro

                Está ação não retornará uma lista de tarefas que tenham como "id_projeto" o ID 1 // O numero "1" se refere ao ID do projeto

            @ Por Porjeto e Status
                (1) METHOD (GET)   URL (http://localhost:8000/api/v1/task/1/?status=pendente) // O numero "1" se refere ao ID do projeto que de seseja usar de parametro para do filtro e "pendente" se refere ao status da Tarefa

                Está ação não retornará uma lista de tarefas que tenham como "id_projeto" o ID 1 // O numero "1" se refere ao ID do projeto e que tenham como status do projeto "pendente" 

