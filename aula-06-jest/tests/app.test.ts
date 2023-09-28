import supertest from "supertest";

import app from "../src/app";

const api = supertest(app);

describe("API test", () => {
  it("should will return correctly status in the route health",async () => {
      const {status, text} = await api.get('/health')
      expect(status).toBe(200);
      expect(text).toBe('OK!')
  })

   it("should will return correctly event", async () => {
     const { body } = await api.get("/event");
     expect(body).toEqual({
       id: expect.any(Number),
       title: "Super Event!",
       image:
         "https://img.freepik.com/fotos-gratis/publico-animado-assistindo-fogos-de-artificio-de-confete-e-se-divertindo-no-festival-de-musica-a-noite-copiar-espaco_637285-559.jpg",
       date: "2023-07-21T00:00:00.000Z",
     });
    
   });
});