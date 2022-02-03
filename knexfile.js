const path = require("path");
const { DB_URL_DEV, DB_URL_TEST } = require("./api/config");

const sharedConfig = {
  client: "pg",
  useNullAsDefault: true,
  migrations: { directory: path.join(__dirname, "data/migrations") },
  seeds: { directory: path.join(__dirname, "data/seeds") },
};

const envSettings = {
  development: {
    ...sharedConfig,
    connection: DB_URL_DEV,
  },
  testing: {
    ...sharedConfig,
    connection: DB_URL_TEST,
  },
};

module.exports = envSettings;
