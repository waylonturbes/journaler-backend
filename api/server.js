const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const authRouter = require("./routers/authRouter");
const usersRouter = require("./routers/usersRouter");
const journalsRouter = require("./routers/journalsRouter");
const handleError = require("../api/middleware/handleError");
const {
  validateAndDecodeToken,
} = require("./middleware/restrictionMiddleware");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

// Routes
server.use("/api/auth", authRouter);
server.use("/api/users", validateAndDecodeToken, usersRouter);
server.use("/api/journals", journalsRouter);

server.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to Journaler API" });
});

// Error handlers
server.all("/*", async (req, res, next) => {
  try {
    return res.status(404).json({
      message: `This action does not exist`,
    });
  } catch (err) {
    return next(err);
  }
});

server.use(handleError);

module.exports = server;
