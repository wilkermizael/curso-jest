
import supertest from "supertest";
import app from "../src/app";

const server = supertest(app)
describe("GET /health", () => {
  it("return corretly status code", async () => {
    const result = await server.get('/health')
    const { statusCode } = result;
    expect(statusCode).toBe(200);
  });
});
