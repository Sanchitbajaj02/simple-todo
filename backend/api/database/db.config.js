require("dotenv").config();

const mongoose = require("mongoose");
const Task = require("../models/tasks.model");

const mongoURL = process.env.MONGO_URL;
// const mongoURL ="mongodb+srv://nodeadmin:nodeadmin@node-tuts.3s7tg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
console.log(mongoURL);

const connectionParams = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

mongoose.Promise = global.Promise;
const db = mongoose.connect(mongoURL, connectionParams);

module.exports = db;
