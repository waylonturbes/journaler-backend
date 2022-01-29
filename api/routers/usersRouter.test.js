const request = require("supertest");
const server = require("../server");
const db = require("../../data/dbconfig");

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
});
beforeEach(async () => {
  await db.seed.run();
});
afterAll(async () => {
  await db.destroy();
});

describe("[GET] /api/users", () => {
  it("if request with header authorization token is valid, respond with an array of user objects and status code 200", async () => {
    const loginRes = await request(server).post("/api/auth/login").send({
      username: "joe_smith",
      password: "1234",
    });
    console.log(loginRes.body);
    const res = await request(server)
      .get("/api/users")
      .set({ Authorization: loginRes.body.token });
    const expectedObject = {
      user_id: "1",
      username: "joe_smith",
    };
    expect(res.status).toBe(200);
    expect(res.body[0]).toMatchObject(expectedObject);
    expect(res.body).toHaveLength(4);
  });
});
