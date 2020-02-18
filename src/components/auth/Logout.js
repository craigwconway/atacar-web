import React from "react";

import { Redirect } from "react-router-dom";

export default function Logout(props) {
  props.setAuth(false);
  return <Redirect to="/" />;
}
