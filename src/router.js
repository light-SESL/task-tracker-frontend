import React from "react";
import { useRoutes } from "react-router-dom";
import Login from "features/auth/login/login";
import Registration from "features/auth/registration/registration";
import GetTasks from "features/tasks/getTasks/getTasks";

const Routes = () =>
  useRoutes([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Registration />,
    },
    {
      path: "/tasks",
      element: <GetTasks />,
    },
  ]);
export default Routes;
