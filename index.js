require("dotenv").config()
const server = require("./api/server")
const { PORT } = require("./api/config")

server.listen(PORT, () => {
  console.log(`Running on port ${PORT}...`)
})
