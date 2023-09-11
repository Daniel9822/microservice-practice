const server = require("./src/server");

const PORT = 3002;
server.listen(PORT, () => {
    console.log(`server listener on port ${PORT}`);
});
