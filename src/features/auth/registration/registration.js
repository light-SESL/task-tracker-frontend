import React, { useEffect, useState } from "react";
import { Container, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  CONFIRM_PASSWORD_REQUIRED,
  USERNAME_REQUIRED,
  PASSWORD_REQUIRED,
} from "constants/features/auth";
import SnackBar from "elements/snackBar/snackBar";
import { Stack } from "../auth.styles";
import RegistrationForm from "./registrationForm";
import { instance } from "../../../config/client";
import { getTokenData, setToken } from "../../../utils/getToken";

export const Registration = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [open, setOpen] = useState(true);

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

  const defaultValues = {
    username: "",
    password: "",
    confirmPassword: "",
  };

  const yupObject = Yup.object({
    username: Yup.string().required(USERNAME_REQUIRED),
    password: Yup.string().required(PASSWORD_REQUIRED),
    confirmPassword: Yup.string().required(CONFIRM_PASSWORD_REQUIRED),
  });

  const handleSubmit = async (values) => {
    const { username, password, confirmPassword } = values;
    if (password !== confirmPassword) {
      setError("Password and confirm Password are not the same, please check");
    } else {
      try {
        const jsonData = {
          username,
          password,
        };
        const response = await instance.post("/users", jsonData);
        setToken(response);
        navigate("/tasks");
      } catch (e) {
        setError("Something went wrong, please review inputs");
        console.error(error);
        throw error;
      }
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      {error.length > 0 && (
        <SnackBar
          message={error}
          open={open}
          setOpen={setOpen}
          setError={setError}
        />
      )}
      <Stack mt={20}>
        <Grid container justify="flex-start">
          <Typography variant="h2" mt={1}>
            Sign Up
          </Typography>
        </Grid>
        <Typography variant="h6" mt={5} mb={4}>
          Register a new account.
        </Typography>
        <Formik
          initialValues={defaultValues}
          validationSchema={yupObject}
          onSubmit={handleSubmit}
        >
          {(formik) => <RegistrationForm formik={formik} />}
        </Formik>
      </Stack>
    </Container>
  );
};

export default Registration;
