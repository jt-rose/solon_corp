const express = require("express");
const links = require("./models/links.json");
const staff = require("./models/staff.json");
const pastWork = require("./models/pastWork.json");

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
  res.render("links.ejs", {
    // you can also write links: links, but in JS
    // when the object property name matches a variable storing the value,
    // you can use this shorthand
    links,
  });
});

app.get("/past-work", (_req, res) => {
  res.render("past-work.ejs", {
    pastWork,
  });
});

app.get("/staff", (_req, res) => {
  res.render("staff.ejs", {
    staff,
  });
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
