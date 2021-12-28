import axios from "axios";

const baseURL = "http://localhost:3000/task/";

const instance = axios.create({
  baseURL: baseURL,
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});

const showAllTasks = async () => {
  try {
    const response = await instance.get("/");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const createTask = async (taskData) => {
  try {
    const response = await instance.post("/", taskData);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const deleteTask = async (taskID) => {
  try {
    const response = await instance.delete(`/${taskID}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export { showAllTasks, createTask, deleteTask };
