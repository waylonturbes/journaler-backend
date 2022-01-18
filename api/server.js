const express = require("express")
const cors = require("cors")
const helmet = require("helmet")
const authRouter = require("./routers/authRouter")

const server = express()

server.use(helmet())
server.use(cors())
server.use(express.json())

// Routes
server.use("/api/auth", authRouter)

server.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to Journaler API" })
})

// Error handler
server.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message || "Something went wrong :("
  })
})

module.exports = server
