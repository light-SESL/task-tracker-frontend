import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import TaskModal from "components/modal/taskModal";
import { addTaskYupObject } from "../task.schema";
import { editATask, getATask } from "../tasks.api";

const EditTask = ({
  setOpen,
  taskTitle,
  reloadOnEdit,
  setReloadOnEdit,
  taskId,
}) => {
  const [taskData, setTaskData] = useState({});
  const defaultDueDate = new Date("2023-04-20T21:00:00.000Z");
  const defaultValues = {
    title: taskData?.title || "",
    description: taskData?.description || "",
    status: taskData?.status || "",
    dueDate: defaultDueDate,
  };
  useEffect(() => {
    (async () => {
      const task = await getATask(taskId);
      setTaskData(task.task);
    })();
  }, []);

  const handleSubmit = async (values) => {
    const { title, description, status, dueDate } = values;
    const jsonData = {
      title,
      description,
      status,
      dueDate,
    };
    await editATask(taskId, jsonData);
    setOpen(false);
    setReloadOnEdit(!reloadOnEdit);
  };

  return (
    <Formik
      enableReinitialize
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

export default EditTask;
