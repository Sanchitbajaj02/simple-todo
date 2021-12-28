const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let TaskSchema = new Schema({
  name: {
    type: String,
    required: "Kindly enter the name of the task",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Tasks", TaskSchema);
