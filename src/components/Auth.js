import React from "react";

import "./Auth.css";
import { authActions } from "../store/auth-slice";
import { useDispatch } from "react-redux";

const Auth = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handle sumbit");
    dispatch(authActions.login());
    //take  id and password and authenticate with firebase
  };
  return (
    <div className="container">
      <h1>Login</h1>{" "}
      <form onSubmit={handleSubmit}>
        <label className="" htmlFor="id">
          Id
        </label>
        <input type="text" name="id" id="id" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <button className="login-btn btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Auth;
