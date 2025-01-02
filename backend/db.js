const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://raja4182:Kvk210raja@inotebook.ljjff.mongodb.net/";

const connectToMongo = async () => {
  await mongoose.connect(mongoURI);
  console.log("connected to mongoDb succesffuly");
};

module.exports = connectToMongo;
