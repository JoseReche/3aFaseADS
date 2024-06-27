const ServicoUsuario = require('../../src/controllers/user');

describe("Meu teste de integração", () => {
    
    it("Criar um usuário", async ()=>{
        const { dataValues } = await ServicoUsuario.createUser("Jakson", "emadsddsdiddl@gamil.com","sehas155");
    
        expect(dataValues.nome).toBe("Jakson");
        expect(dataValues.email).toBe("emadsddsdiddl@gamil.com");
    })
})