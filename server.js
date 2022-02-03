const express = require("express");
const links = require("./models/links.json");
const staff = require("./models/staff.json");
const pastWork = require("./models/pastWork.json");

const app = express();

app.use(express.static("public"));

/* -------------------------------------------------------------------------- */
/*                                normal routes                               */
/* -------------------------------------------------------------------------- */
app.get("/", (_req, res) => {
  res.render("index.ejs", {
    title: "Home",
  });
});

app.get("/contact", (_req, res) => {
  res.render("contact.ejs", {
    title: "Contact",
  });
});

app.get("/history", (_req, res) => {
  res.render("history.ejs", {
    title: "History",
  });
});

app.get("/links", (_req, res) => {
  res.render("links.ejs", {
    links: links,
    title: "Links",
    // if the object property and value are the same word, ie: "links: links"
    // you can actually just write "links" as a shorthand, as shown below
  });
});

app.get("/past-work", (_req, res) => {
  res.render("past-work.ejs", {
    pastWork,
    title: "Past Work",
  });
});

/* -------------------------------------------------------------------------- */
/*                      set up CRUD via queries                               */
/* -------------------------------------------------------------------------- */

app.get("/staff", (_req, res) => {
  res.render("staff.ejs", {
    staff,
    title: "Staff",
  });
});

app.get("/staff-delete", (req, res) => {
  staff.pop();
  res.render("staff.ejs", {
    staff,
    title: "Staff",
  });
});

app.get("/staff-add", (req, res) => {
  const { first_name, last_name } = req.query;
  staff.push({ first_name, last_name });
  res.render("staff.ejs", {
    staff,
    title: "Staff",
  });
});

app.get("/staff-update", (req, res) => {
  staff[0] = { first_name: "Updated", last_name: "Person" };
  res.render("staff.ejs", {
    staff,
    title: "Staff",
  });
});

/* -------------------------------------------------------------------------- */
/*                     lastly, start up the actual server                     */
/* -------------------------------------------------------------------------- */
app.listen(3000, () => {
  console.log("listening on port 3000");
});
