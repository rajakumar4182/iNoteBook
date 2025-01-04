const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://raja4182:Kvk210raja%40@test.s0drx.mongodb.net/inotebook";

const connectToMongo = async () => {
  await mongoose.connect(mongoURI);
  console.log("connected to mongoDb succesffuly");
};

module.exports = connectToMongo;
