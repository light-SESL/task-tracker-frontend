import React from "react";
import { Form } from "formik";
import { Grid, Link, Typography } from "@mui/material";
import TextField from "elements/textField/textField";
import CustomButton from "elements/customButton/customButton";
import { COLORS } from "styles/theme";

const LoginForm = ({ formik }) => (
  <Form id="loginForm" onSubmit={formik.handleSubmit}>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          label="Username"
          name="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          error={formik.touched.username && Boolean(formik.errors.username)}
          helperText={formik.touched.username && formik.errors.username}
          id="email"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          type="password"
          id="password"
        />
      </Grid>
      <Grid item xs={12}>
        <CustomButton
          type="submit"
          width="100%"
          variant="contained"
          background={COLORS.SKY_BLUE}
          hoverbackground={COLORS.BLUE}
        >
          LogIn
        </CustomButton>
      </Grid>
      <Grid item xs={12}>
        <Link underline="none" href="/register" data-testid="register">
          <Typography variant="h6" sx={{ color: COLORS.SKY_BLUE }}>
            Do not have an account? Sign Up
          </Typography>
        </Link>
      </Grid>
    </Grid>
  </Form>
);

export default LoginForm;
