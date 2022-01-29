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

describe("[GET] /api/journals", () => {
  it("if request body is valid, respond with an array of journal objects and status code 200", async () => {
    const res = await request(server).get("/api/journals");
    const expectedObject = {
      journal_id: "1",
      user_id: "1",
      title: "Ordinary Joe",
      journal_entry: "Joe joe, joe joe... joe! ...joe?",
    };
    expect(res.status).toBe(200);
    expect(res.body[0]).toMatchObject(expectedObject);
    expect(res.body).toHaveLength(5);
  });
});
