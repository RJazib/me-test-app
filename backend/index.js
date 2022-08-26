const express = require("express");
const router = require("./src/routes/appRoute");

const port = 8080;
const app = express();

app.use(express.json());
app.use(router);

app.listen(port, () => console.log("server listening on port 8080"));
