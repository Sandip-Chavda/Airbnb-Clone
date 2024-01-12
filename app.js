const express = require("express");
const app = express();
const mongoose = require("mongoose");
//importing listing module
const Listing = require("./models/listing");
const path = require("path");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlove";

main()
  .then(() => {
    console.log("DB Connection Successfull.");
  })
  .catch((err) => {
    console.log(err);
  });
async function main() {
  await mongoose.connect(MONGO_URL);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//Home Route
app.get("/", (req, res) => {
  res.send("This Home/Root Page.");
});

app.get("/listings", async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
});

//testListing Route
// app.get("/testListing", async (req, res) => {
//   //database entry created
//   let sampleListing = new Listing({
//     title: "Lakshyadweep",
//     description: "World's Best White Sand Beach and Blue Water.",
//     price: 5999,
//     location: "Lakshyadweep",
//     country: "India",
//   });

//   //adding entry to database
//   await sampleListing.save();
//   console.log("Sample entry saved to DB");
//   res.send("Successfull Tesing.");
// });

app.listen(4000, () => {
  console.log("Server is started on port 4000.");
});
