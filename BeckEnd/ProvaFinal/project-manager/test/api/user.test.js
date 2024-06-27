const app = require("../../src/app");
const request = require("supertest");

describe("Criar um usuário", () => {
  
    it("POST /Criar usuário deve retornar um usuário criado", async () => {
      const response = await request(app)
        .post("/api/v1/user")
        .send({
            nome: "jose", 
            email: "esdsda@gmail.com", 
            senha: "koooli2445"
         });
  
      expect(response.statusCode).toBe(201);
      expect(response.body).toHaveProperty("id");
      expect(response.body.nome).toBe("jose");
      expect(response.body.email).toBe("esdsda@gmail.com");
    })

    it("POST /Criar usuário deve retornar um usuário criado", async () => {
        const response = await request(app)
          .post("/api/v1/user")
          .send({
              nome: "", 
              email: "esdsda@gmail.com", 
              senha: "koooli2445"
           });
    
        expect(response.statusCode).toBe(400);
        expect(response.body.error).toBe("Erro ao criar usuário Nome, é obrigatório.");
      })
}); 