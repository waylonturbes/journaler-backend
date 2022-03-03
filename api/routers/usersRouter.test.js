const request = require("supertest");
const server = require("../server");
// const express = require("express");
// const handleError = require("../middleware/handleError");
// const usersRouter = require("./usersRouter");
// const authRouter = require("./authRouter");

// Declare Test API
// const server = express();
// server.use("/api/users", usersRouter);
// server.use("/api/auth", authRouter);
// server.use(handleError);

// User Tests

describe("[GET] /api/users", () => {
  let successfulLoginRes;
  beforeAll(async () => {
    successfulLoginRes = await request(server).post("/api/auth/login").send({
      username: "joe_smith",
      password: "1234",
    });
  });
  describe("If request header Authorization has a valid token", () => {
    let res;
    beforeAll(async () => {
      res = await request(server)
        .get("/api/users")
        .set({ Authorization: successfulLoginRes.body.token });
    });
    it("responds with an array of user objects", () => {
      const expectedObject = {
        user_id: "1",
        username: "joe_smith",
      };
      expect(res.body[0]).toMatchObject(expectedObject);
      expect(res.body).toHaveLength(4);
    });
    it("responds with status code 200", () => {
      expect(res.status).toBe(200);
    });
  });
  describe("If request header Authorization DOES NOT have a valid token", () => {
    let res;
    beforeAll(async () => {
      res = await request(server)
        .get("/api/users")
        .set({ Authorization: "badToken" });
    });
    it("responds with the message 'Provided token is invalid'", () => {
      const expectedMessage = /provided token is invalid/i;
      expect(res.body.message).toMatch(expectedMessage);
    });
    it("responds with status code 401", () => {
      expect(res.status).toBe(401);
    });
  });
  describe("If request header Authorization is empty", () => {
    let res;
    beforeAll(async () => {
      res = await request(server).get("/api/users");
    });
    it("responds with the message 'Token is required'", () => {
      const expectedMessage = /token is required/i;
      expect(res.body.message).toMatch(expectedMessage);
    });
    it("responds with status code 401", () => {
      expect(res.status).toBe(401);
    });
  });
});
