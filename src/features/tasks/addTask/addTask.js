import React from "react";
import { Formik } from "formik";
import TaskModal from "components/modal/taskModal";
import { addTaskYupObject } from "../task.schema";
import { addTask } from "../tasks.api";

const AddTask = ({ setOpen, taskTitle, reloadPage, setReloadPage }) => {
  const defaultValues = {
    title: "",
    description: "",
    status: "",
    dueDate: "",
  };

  const handleSubmit = async (values) => {
    const { title, description, status, dueDate } = values;

    const jsonData = {
      title,
      description,
      status,
      dueDate,
    };
    await addTask(jsonData);
    setOpen(false);
    setReloadPage(!reloadPage);
  };

  return (
    <Formik
      initialValues={defaultValues}
      validationSchema={addTaskYupObject}
      onSubmit={handleSubmit}
    >
      {(formik) => (
        <TaskModal setOpen={setOpen} title={taskTitle} formik={formik} />
      )}
    </Formik>
  );
};

export default AddTask;
