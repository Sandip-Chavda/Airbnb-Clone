const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

//USER Schema

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  //passport automatic define username, hash and salt.
});

//passport automatic define username, hash and salt.
//automatic implement karva mate as plugin implement karyu.
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);

//passport uses PBKDF2 hashing algorithm
