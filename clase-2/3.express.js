const express = require("express");
const dittoJSON = require("./pokemon/ditto.json");

const PORT = process.env.PORT ?? 1234;
const app = express();

app.disable("x-powered-by");

app.use(express.json());

/* app.use((req, res, next) => {
  if (req.method !== "POST") return next();
  if (req.headers["content-type"] !== "application/json") return next();

  let body = "";

  req.on("data", (chunk) => {
    body += chunk.toString();
  });

  req.on("end", () => {
    const data = JSON.parse(body);
    data.timestamp = Date.now();

    // mutar la request y meter información en el req.body
    req.body = data;
    next();
  });
}); */

app.get("/pokemon/ditto", (req, res) => {
  res.json(dittoJSON);
});

app.get("/", (req, res) => {
  res.status(200).send("<h1>Mi página</h1>");
});

app.post("/pokemon", (req, res) => {
  res.status(201).json(req.body);
});

app.use((req, res) => {
  res.status(404).send("<h1>Error 404</h1>");
});

app.listen(PORT, () => {
  console.log(`Applicación escuchando en http://localhost:${PORT}`);
});
