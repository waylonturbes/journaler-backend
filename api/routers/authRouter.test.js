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
/*
REGISTER TESTING
*/
describe("[POST] /api/auth/register", () => {
  it('if request body is valid, respond with the message "Successfully registered!" new user object and status code 201', async () => {
    const expectedResponse = {
      message: "Successfully registered!",
      userInfo: {
        username: "frodo",
      },
    };
    const res = await request(server).post("/api/auth/register").send({
      username: "frodo",
      password: "1234",
    });
    expect(res.status).toBe(201);
    expect(res.body).toMatchObject(expectedResponse);
    expect(res.body.userInfo).toHaveProperty("user_id");
  });
  it('if the request body\'s username is taken, respond with the message "Username {username} is taken" and status code 409', async () => {
    const expectedResponse = /is taken/i;
    const res = await request(server).post("/api/auth/register").send({
      username: "joe_smith",
      password: "1234",
    });
    expect(res.status).toBe(409);
    expect(res.body.message).toMatch(expectedResponse);
  });
  it('if the request body lacks a username, respond with the message "Username is required" and status code 400', async () => {
    const expectedResponse = /username is required/i;
    const res = await request(server).post("/api/auth/register").send({
      username: "",
      password: "1234",
    });
    expect(res.status).toBe(400);
    expect(res.body.message).toMatch(expectedResponse);
  });
  it('if the request body username is shorter than 3 characters, respond with the message "Username must contain at least 3 characters" and status code 400', async () => {
    const expectedResponse = /username must contain at least 3 characters/i;
    const res = await request(server).post("/api/auth/register").send({
      username: "ab",
      password: "1234",
    });
    expect(res.status).toBe(400);
    expect(res.body.message).toMatch(expectedResponse);
  });
  it('if the request body lacks a password, respond with the message "Password is required" and status code 400', async () => {
    const expectedResponse = /password is required/i;
    const res = await request(server).post("/api/auth/register").send({
      username: "frodo",
      password: "",
    });
    expect(res.status).toBe(400);
    expect(res.body.message).toMatch(expectedResponse);
  });
  it('if the request body password is shorter than 6 characters, respond with the message "Password must contain at least 6 characters" and status code 400', async () => {
    const expectedResponse = /password must contain at least 4 characters/i;
    const res = await request(server).post("/api/auth/register").send({
      username: "frodo",
      password: "123",
    });
    expect(res.status).toBe(400);
    expect(res.body.message).toMatch(expectedResponse);
  });
});
/*
LOGIN TESTING
*/
describe("[POST] /api/auth/login", () => {
  it('if request body is valid and the user, respond with the message "Welcome {username}" and status code 200', async () => {
    const expectedResponse = /welcome, barney11!/i;
    const res = await request(server).post("/api/auth/login").send({
      username: "barney11",
      password: "1234",
    });
    expect(res.status).toBe(200);
    expect(res.body.message).toMatch(expectedResponse);
  });
  it('if request body lacks a password, respond with the message "Password is required" and status code 400', async () => {
    const expectedResponse = /password is required/i;
    const res = await request(server).post("/api/auth/login").send({
      username: "joe_smith",
      password: "",
    });
    expect(res.status).toBe(400);
    expect(res.body.message).toMatch(expectedResponse);
  });
  it('if request body lacks a username, respond with the message "Username is required" and status code 400', async () => {
    const expectedResponse = /username is required/i;
    const res = await request(server).post("/api/auth/login").send({
      username: "",
      password: "123456",
    });
    expect(res.status).toBe(400);
    expect(res.body.message).toMatch(expectedResponse);
  });
  it('if request body has an unknown username, respond with the message "User does not exist" and status code 404', async () => {
    const expectedResponse = /user does not exist/i;
    const res = await request(server).post("/api/auth/login").send({
      username: "Lo3_Sm1tH",
      password: "1234",
    });
    expect(res.body.message).toMatch(expectedResponse);
    expect(res.status).toBe(404);
  });
  it('if request body has an invalid password, respond with the message "Invalid credentials" and status code 400', async () => {
    const expectedResponse = /invalid credentials/i;
    const res = await request(server).post("/api/auth/login").send({
      username: "joe_smith",
      password: "123456",
    });
    expect(res.status).toBe(401);
    expect(res.body.message).toMatch(expectedResponse);
  });
});
