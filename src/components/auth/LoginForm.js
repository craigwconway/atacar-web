import React from "react";

import { Redirect } from "react-router-dom";

import { useFormik } from "formik";

import { login } from "./AuthService";

export default function LoginForm(props) {
  const formik = useFormik({
    initialValues: {
      username: "tomas",
      password: ""
    },
    onSubmit: values => {
      login(values, props.setAuth);
    }
  });
  return props.auth ? (
    <Redirect to="/" />
  ) : (
    <form className="login" onSubmit={formik.handleSubmit}>
      <div className="h5">Administrator password</div>
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <br />
      <button type="submit" className="mt-2">
        Login
      </button>
    </form>
  );
}
