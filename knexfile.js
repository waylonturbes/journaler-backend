const sharedConfig = {
  client: "pg",
  useNullAsDefault: true,
  migrations: { directory: "./data/migrations" },
  seeds: { directory: "./data/seeds" }
}

const envSettings = {
  development: {
    ...sharedConfig,
    connection: process.env.DB_URL_DEV
  },
  testing: {
    ...sharedConfig,
    connection: process.env.DB_URL_TEST
  }
}

module.exports = envSettings
