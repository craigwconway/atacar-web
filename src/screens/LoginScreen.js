import React from "react";

import LoginForm from "../components/auth/LoginForm";

function LoginScreen(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-1" />
        <div className="col-10 text-only">
          <LoginForm {...props} />
        </div>
        <div className="col-1" />
      </div>
    </div>
  );
}

export default LoginScreen;
