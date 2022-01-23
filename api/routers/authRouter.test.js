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

describe("[POST] /api/auth/register", () => {
  it("if request body is valid, respond with the new user object and status code 201", async () => {
    const expectedResponse = {
      username: "frodo",
      email: "fordo@shire.me",
    };
    const res = await request(server).post("/api/auth/register").send({
      username: "frodo",
      email: "fordo@shire.me",
      password: "1234",
    });
    expect(res.status).toBe(201);
    expect(res.body).toMatchObject(expectedResponse);
  });
  it('if request body lacks an email, respond with the message "Email address is required" and status code 400', async () => {
    const expectedResponse = /email address is required/i;
    const res = await request(server).post("/api/auth/register").send({
      username: "frodo",
      email: "",
      password: "1234",
    });
    expect(res.status).toBe(400);
    expect(res.body.message).toMatch(expectedResponse);
  });
  it('if request body contains an invalid email, respond with the message "Invalid email address" and status code 400', async () => {
    const expectedResponse = /invalid email address/i;
    const res = await request(server).post("/api/auth/register").send({
      username: "frodo",
      email: "badEmail",
      password: "1234",
    });
    expect(res.status).toBe(400);
    expect(res.body.message).toMatch(expectedResponse);
  });
  it('if the request body\'s email is taken, respond with the message "Email {email} is taken" and status code 409', async () => {
    const expectedResponse = /is taken/i;
    const res = await request(server).post("/api/auth/register").send({
      username: "smith_joe",
      email: "joe.smith@genericnames.net",
      password: "1234",
    });
    expect(res.status).toBe(409);
    expect(res.body.message).toMatch(expectedResponse);
  });
  it('if the request body\'s username is taken, respond with the message "Username {username} is taken" and status code 409', async () => {
    const expectedResponse = /is taken/i;
    const res = await request(server).post("/api/auth/register").send({
      username: "joe_smith",
      email: "smith@joe.imp",
      password: "1234",
    });
    expect(res.status).toBe(409);
    expect(res.body.message).toMatch(expectedResponse);
  });
  it("if both the request body's username & email are taken, respond with the message object containing both their error messages and status code 409", async () => {
    const res = await request(server).post("/api/auth/register").send({
      username: "joe_smith",
      email: "joe.smith@genericnames.net",
      password: "1234",
    });
    expect(res.status).toBe(409);
    expect(res.body.message).toHaveProperty("username");
    expect(res.body.message).toHaveProperty("email");
  });
  it('if the request body lacks a username, respond with the message "Username is required" and status code 400', async () => {
    const expectedResponse = /username is required/i;
    const res = await request(server).post("/api/auth/register").send({
      username: "",
      email: "fordo@shire.me",
      password: "1234",
    });
    expect(res.status).toBe(400);
    expect(res.body.message).toMatch(expectedResponse);
  });
  it('if the request body lacks a password, respond with the message "Password is required" and status code 400', async () => {
    const expectedResponse = /password is required/i;
    const res = await request(server).post("/api/auth/register").send({
      username: "frodo",
      email: "fordo@shire.me",
      password: "",
    });
    expect(res.status).toBe(400);
    expect(res.body.message).toMatch(expectedResponse);
  });
});
