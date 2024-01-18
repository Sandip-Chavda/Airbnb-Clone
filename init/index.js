const mongoose = require("mongoose");
const initData = require("./data");
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
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "65a80168b9ab6b2daa754977",
  }));
  //satrt inserting new data
  await Listing.insertMany(initData.data);
  console.log("Data Initialized");
};

inintDB();
