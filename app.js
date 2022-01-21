const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");

const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/about", (req, res) => {
  res.render("pages/about");
});

app.get("/episodes", (req, res) => {
  res.render("pages/episodes");
});

app.get("/guests", (req, res) => {
  res.render("pages/guests");
});

app.get("/", (req, res) => {
  res.render("pages/index");
});

app.listen(port, () => {
  console.log("server is running");
});
