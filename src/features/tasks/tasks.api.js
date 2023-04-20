import { instance } from "../../config/client";

export const getAllTasks = async () => {
  try {
    const response = await instance.get("/tasks");
    return response.data.tasks;
  } catch (e) {
    console.warn(e);
  }
};

export const getATask = async (id) => {
  try {
    const response = await instance.get(`/tasks/${id}`);
    return response.data;
  } catch (e) {
    console.warn(e);
  }
};

export const editATask = async (id, data) => {
  try {
    const response = await instance.put(`/tasks/${id}`, data);
    return response.data;
  } catch (e) {
    console.warn(e);
  }
};

export const addTask = async (data) => {
  try {
    const response = await instance.post("/tasks", data);
    return response.data;
  } catch (e) {
    console.warn(e);
  }
};

export const deleteATask = async (id) => {
  try {
    const response = await instance.delete(`/tasks/${id}`);
    return response.data;
  } catch (e) {
    console.warn(e);
  }
};
