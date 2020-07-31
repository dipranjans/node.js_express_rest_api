const express = require("express");
const bodyParser = require("body-parser");
const usersRoute = require("./routes/users");

const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("welcome to rest api using node express");
});

app.use("/users", usersRoute);

app.get("*", (req, res) => {
  res.send("route is not matching!");
});

const port = 5050;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
