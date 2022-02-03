require("dotenv").config();
const express = require("express");
const links = require("./models/links.json");
const staff = require("./models/staff.json");
const pastWork = require("./models/pastWork.json");

const main = async () => {
  try {
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

    /* -------------------------------------------------------------------------- */
    /*               this section is for playing around with MongoDB              */
    /* -------------------------------------------------------------------------- */

    const { MongoClient } = require("mongodb");
    // Connect to the db
    const client = new MongoClient(process.env.MONGO_URL);
    await client.connect();
    console.log("connected to mongo db");

    // const databasesList = await client
    //   .db("solon_corp")
    //   .collection("past_work")
    //   .insertMany(pastWork);
    // console.log(databasesList);

    app.get("/mongo/staff", async (_req, res) => {
      const mongoStaff = await client
        .db("solon_corp")
        .collection("staff")
        .find()
        .toArray();
      res.render("staff.ejs", {
        staff: mongoStaff,
      });
    });

    app.get("/mongo/past-work", async (_req, res) => {
      const mongoPastWork = await client
        .db("solon_corp")
        .collection("past_work")
        .find()
        .toArray();
      res.render("past-work.ejs", {
        pastWork: mongoPastWork,
      });
    });

    app.get("/mongo/links", async (_req, res) => {
      const mongoLinks = await client
        .db("solon_corp")
        .collection("links")
        .find()
        .toArray();
      res.render("links.ejs", {
        links: mongoLinks,
      });
    });

    /* -------------------------------------------------------------------------- */
    /*                     lastly, start up the actual server                     */
    /* -------------------------------------------------------------------------- */
    app.listen(3000, () => {
      console.log("listening on port 3000");
    });
  } catch (e) {
    console.log(e);
  }
};

main();
