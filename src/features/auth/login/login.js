import React, { useEffect, useState } from "react";
import { Container, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import { instance } from "config/client";
import { PASSWORD_REQUIRED, USERNAME_REQUIRED } from "constants/features/auth";
import SnackBar from "elements/snackBar/snackBar";
import { setToken, getTokenData } from "utils/getToken";
import LoginForm from "./loginForm";
import { Stack } from "../auth.styles";

export const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const token = getTokenData();
    if (token?.username) {
      navigate("/tasks");
    }
  }, []);

  useEffect(() => {
    if (error.length > 0) {
      setOpen(true);
    }
  }, [error]);

  const defaultValues = { username: "", password: "" };

  const yupObject = Yup.object({
    username: Yup.string().required(USERNAME_REQUIRED),
    password: Yup.string().required(PASSWORD_REQUIRED),
  });

  const handleSubmit = async (values) => {
    const { username, password } = values;
    const jsonData = {
      username,
      password,
    };
    setError("");
    try {
      const response = await instance.post("/users/login", jsonData);
      setToken(response);

      navigate("/tasks");
    } catch (e) {
      setOpen(true);
      setError("Something went wrong, please review inputs");
      console.error(e);
      throw e;
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      {error.length > 0 ? (
        <SnackBar
          message={error}
          open={open}
          setOpen={setOpen}
          setError={setError}
        />
      ) : null}
      <Stack mt={20}>
        <Grid container justify="flex-start">
          <Typography variant="h2" mt={1}>
            Welcome back
          </Typography>
        </Grid>
        <Typography variant="h6" mt={5} mb={4}>
          Please enter your username and password to access your tasks.
        </Typography>
        <Formik
          initialValues={defaultValues}
          validationSchema={yupObject}
          onSubmit={handleSubmit}
        >
          {(formik) => <LoginForm formik={formik} />}
        </Formik>
      </Stack>
    </Container>
  );
};

export default Login;
