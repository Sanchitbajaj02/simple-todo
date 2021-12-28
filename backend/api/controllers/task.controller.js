const mongoose = require("mongoose");
const Task = mongoose.model("Tasks");

exports.list_all_tasks = (req, res) => {
  Task.find({}, (err, task) => {
    if (err) throw err;

    res.status(200).json({
      message: "Tasks fetched successfully",
      result: task,
    });
  });
};

exports.create_a_task = (req, res) => {
  let newTask = new Task({
    name: req.body.name,
  });

  newTask.save((err, task) => {
    if (err) throw err;

    res.status(200).json({
      message: "Task created successfully",
      result: task,
    });
  });
};

exports.read_a_task = (req, res) => {
  Task.findOne(req.params.taskId, (err, task) => {
    if (err) throw err;

    res.status(200).json({
      message: "Single Task fetched successfully",
      result: task,
    });
  });
};

exports.update_a_task = (req, res) => {
  Task.findOneAndUpdate(
    { taskId: req.params.taskId },
    req.body,
    { new: true },
    (err, task) => {
      if (err) throw err;

      res.status(200).json({
        message: "Task updated successfully",
        result: task,
      });
    }
  );
};

exports.delete_a_task = (req, res) => {
  Task.remove({ _id: req.params.taskId }, (err, task) => {
    if (err) throw err;

    res.status(200).json({
      message: "Task deleted successfully",
    });
  });
};
