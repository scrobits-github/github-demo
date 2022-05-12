const express = require("express");
const app = express();
const cors = require("cors");
const helmet = require("helmet");

app.use(cors());
app.use(express.json());
app.use(helmet());
app.disable("x-powered-by");

const user_controller = require("./api/users/users.controller");
app.use('/api/users', user_controller);

app.get("/", (req, res) => {
  res.send({ msg: "Hello World!" });
});




app.listen(3333, () => {
  console.log("Server started on port 3333");
});
