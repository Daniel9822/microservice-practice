const server = require("./src/server");
const conn = require("./src/config/conn");
const { NODE_ENV } = require("./src/config/envs");

const PORT = process.env.PORT || 8004;

console.log({ NODE_ENV });

if (NODE_ENV !== "test") {
  server.listen(PORT, async () => {
    console.log(`Server listener on port ${PORT}`);
  });
}

conn();

module.exports = server;
