const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// creating listing Schema
const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    type: String,
    default:
      "https://images.unsplash.com/photo-1505881402582-c5bc11054f91?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //if user not set any image then set default url img.
    set: (v) =>
      v === ""
        ? "https://images.unsplash.com/photo-1505881402582-c5bc11054f91?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        : v,
  },
  price: Number,
  location: String,
  country: String,
});

// creating and exporing model for listing schema
const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
