const request = require("supertest")
const server = require("../server")
const db = require("../../data/dbconfig")

beforeAll(async () => {
  await db.migrate.rollback()
  await db.migrate.latest()
})
beforeEach(async () => {
  await db.seed.run()
})
afterAll(async () => {
  await db.destroy()
})

describe("[POST] /api/auth/register", () => {
  it('responds with the message "successfully registered {username}" and status code 201 if request body is valid', async () => {
    const expectedMessage = /successfully registered/i
    const res = await request(server)
      .post('/api/auth/register')
      .send({
        username: "frodo",
        email: "fordo@shire.me",
        password: "1234"
      })
    expect(res.status).toBe(201)
    expect(res.body.message).toMatch(expectedMessage)
  })
  it('responds with the message "email required" and status code 401 if request body lacks an email', async () => {
    const expectedMessage = /email required/i
    const res = await request(server)
      .post('/api/auth/register')
      .send({
        username: "frodo",
        email: "",
        password: "1234"
      })
    expect(res.status).toBe(201)
    expect(res.body.message).toMatch(expectedMessage)
  })
  it('responds with the message "username already exists" and status code 401 if the request body\'s username already exists', async () => {
    const expectedMessage = /username already exists/i
    const res = await request(server)
      .post('/api/auth/register')
      .send({
        username: "frodo",
        email: "fordo@shire.me",
        password: "1234"
      })
    expect(res.status).toBe(401)
    expect(res.body.message).toMatch(expectedMessage)
  })
  it('responds with the message "username required" and status code 401 if the request body lacks a username', async () => {
    const expectedMessage = /username required/i
    const res = await request(server)
      .post("/api/auth/register")
      .send({
        username: "",
        email: "fordo@shire.me",
        password: "bad"
      })
    expect(res.status).toBe(401)
    expect(res.body.message).toMatch(expectedMessage)
  })
  it('responds with the message "password required" and status code 401 if the request body lacks a password', async () => {
    const expectedMessage = /password required/i
    const res = await request(server)
      .post("/api/auth/register")
      .send({
        username: "bad",
        email: "fordo@shire.me",
        password: ""
      })
    expect(res.status).toBe(401)
    expect(res.body.message).toMatch(expectedMessage)
  })
})
