import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../features/user";

const Login = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div>Login</div>
      <button
        onClick={() => {
          dispatch(login({ name: "Dessy", age: 20, email: "dessy@gmail.com" }));
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          dispatch(logout());
        }}
      >
        Log Out
      </button>
    </>
  );
};

export default Login;
