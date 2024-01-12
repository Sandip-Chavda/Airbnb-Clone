const mongoose = require("mongoose");
const initdata = require("./data");
const Listing = require("../models/listing");

//mongodb connection
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

const inintDB = async () => {
  await Listing.deleteMany({}); //old data delete
  //satrt inserting new data
  await Listing.insertMany(initdata.data);
  console.log("Data Initialized");
};

inintDB();
