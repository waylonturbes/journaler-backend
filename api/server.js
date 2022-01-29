const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const authRouter = require("./routers/authRouter");
const usersRouter = require("./routers/usersRouter");
const journalsRouter = require("./routers/journalsRouter");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

// Routes
server.use("/api/auth", authRouter);
server.use("/api/users", usersRouter);
server.use("/api/journals", journalsRouter);

server.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to Journaler API" });
});

// Error handlers
server.all("/*", async (req, res, next) => {
  try {
    res.status(404).json({
      message: `This action does not exist`,
    });
  } catch (err) {
    return next(err);
  }
});
// eslint-disable-next-line
server.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message || "Something went wrong :(",
  });
});

module.exports = server;
