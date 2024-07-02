const app = require("../../src/app");
const request = require("supertest");

describe("Criar do Usuario", () => {

    it("POST /Criar usuário deve retornar um usuário criado", async () => {
      const response = await request(app)
        .post("/api/v1/user")
        .send({
            nome: "jose", 
            email: "esdgfgdsdsda@gmail.com", 
            senha: "koooli2445"
         });
  
      expect(response.statusCode).toBe(201);
      expect(response.body).toHaveProperty("id");
      expect(response.body.nome).toBe("jose");
      expect(response.body.email).toBe("esdgfgdsdsda@gmail.com");
    })
  });
describe("Logar do Usuario", () => {

    it("POST /Logar usuário", async () => {
      const response = await request(app)
        .post("/api/v1/login")
        .send({
            nome: "jose", 
            email: "esdgfgdsdsda@gmail.com", 
            senha: "koooli2445"
         });
  
      expect(response.statusCode).toBe(201);
      expect(response.body.token).toHaveProperty("");;
    })

});
describe("Deletar do Usuario", () => {
    it("DELETE /Deletar usuário", async () => {
        const response = await request(app)
          .delete("/api/v1/user");
    
        expect(response.statusCode).toBe(200);
        expect(response.body).toStrictEqual({});
      })
}); 