require("dotenv").config();
const express = require("express");
const app = express();
const logger = require("morgan");

port = process.env.PORT || 3000;

const db = require("./api/database/db.config");
db.then(() => {
  console.log("Database connected");
}).catch((err) => {
  console.log(`Error: ${err}`);
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));

const routes = require("./api/routes/task.route");
app.use("/tasks", routes);

app.get("*", (req, res) => {
  res.status(404).send({ url: `${req.originalUrl} not found` });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
