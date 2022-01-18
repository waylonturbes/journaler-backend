require("dotenv").config()

const globalConfig = {
  PORT: parseInt(process.env.PORT) || 9000,
  JWT_SECRET: process.env.JWT_SECRET || "jwt secret missing",
  DB_URL_DEV: process.env.DB_URL_DEV || "dev db url missing",
  DB_URL_TEST: process.env.DB_URL_TEST || "test db url missing",
  NODE_ENV: process.env.NODE_ENV || "development",
  BCRYPT_ROUNDS: parseInt(process.env.BCRYPT_ROUNDS) || 8,
  TEST_PASSWORD: process.env.TEST_PASSWORD || "test password not set"
}

module.exports = globalConfig
