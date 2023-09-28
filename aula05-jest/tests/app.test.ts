import supertest from "supertest";

import app from "./../src/app";

const api = supertest(app);


describe("fibonnaci Sequence", () => {

 it("should return 200 and a fibonacci sequence with n elements", async () => {
   const { status, body } = await api.get("/fibonacci?elements=10");
   expect(status).toBe(200);
   expect(body).toHaveLength(10);
   expect(body).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
 });
});