const ServicoUsuario = require('../../src/controllers/user');
const faker = require('faker');
const assert = require('assert');

describe('Teste de Integração', async function() {
    it('Deve registrar um usuário com um email aleatório', function(done) {
        // Gerar um email aleatório
        const emailAleatorio = faker.internet.email();

        // Dados do usuário de teste
        const { dataValues } = ServicoUsuario.createUser(faker.name.findName(),emailAleatorio,"batata123");

        // Simule a lógica de registro do usuário
        registrarUsuario(usuarioTeste, function(erro, usuarioRegistrado) {
            assert.strictEqual(erro, null);
            assert.strictEqual(usuarioRegistrado.email, emailAleatorio);
            done();
        });
    });
});


 