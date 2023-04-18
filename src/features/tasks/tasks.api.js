import { instance } from "../../config/client";

export const getAllTasks = async () => {
  try {
    const response = await instance.get("/tasks");
    return response.data.tasks;
  } catch (e) {}
};
