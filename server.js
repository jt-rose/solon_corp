const express = require("express");

const app = express();

app.get("/", (_req, res) => {
  res.render("index.ejs");
});

app.get("/contact", (_req, res) => {
  res.render("contact.ejs");
});

app.get("/history", (_req, res) => {
  res.render("history.ejs");
});

app.get("/links", (_req, res) => {
  res.render("links.ejs");
});

app.get("/past-work", (_req, res) => {
  res.render("past-work.ejs");
});

app.get("/staff", (_req, res) => {
  res.render("staff.ejs");
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
