const express = require("express");
const links = require("./models/links.json");
const staff = require("./models/staff.json");
const pastWork = require("./models/pastWork.json");

const app = express();

/* -------------------------------------------------------------------------- */
/*                                normal routes                               */
/* -------------------------------------------------------------------------- */
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
    links: links,
    // if the object property and value are the same word, ie: "links: links"
    // you can actually just write "links" as a shorthand, as shown below
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

/* -------------------------------------------------------------------------- */
/*                     lastly, start up the actual server                     */
/* -------------------------------------------------------------------------- */
app.listen(3000, () => {
  console.log("listening on port 3000");
});
