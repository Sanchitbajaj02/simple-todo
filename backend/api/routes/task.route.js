const express = require("express");
const router = express.Router();

let todoList = require("../controllers/task.controller");

// router.route("/").get(todoList.list_all_tasks).post(todoList.create_a_task);

// router
//   .route("/:taskId")
//   .get(todoList.read_a_task)
//   .put(todoList.update_a_task)
//   .delete(todoList.delete_a_task);

// show all todos
router.get("/", todoList.list_all_tasks);

// create a todo
router.post("/", todoList.create_a_task);

// read a single task
router.get("/:taskId", todoList.read_a_task);

// update a single task
router.put("/:taskId", todoList.update_a_task);

// delete a single task
router.delete("/:taskId", todoList.delete_a_task);

module.exports = router;
