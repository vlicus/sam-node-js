const http = require("node:http");
const { findAvailablePort } = require("./10.free-port.js");

const desiredPort = process.env.PORT ?? 3000;

const server = http.createServer((req, res) => {
  console.log("Request received");
  res.end("Hola mundo!");
});

findAvailablePort(desiredPort).then((port) => {
  server.listen(port, () => {
    console.log(`Server escuchando en el puerto http://localhost:${server.address().port}`);
  });
});
