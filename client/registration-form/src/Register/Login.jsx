import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';


const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({ email: "", password: "" });
  const [err, setErr] = useState("");
  const submitHandler = async (e) => {
    e.preventDefault();
    if (data.email === "" || data.password === "") {
      setErr("All Fields are necessary");
      return;
    }
    console.log(data);
    setErr("");
    fetch("http://localhost:8001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then((res) => {
        return res.json();
      })
      .then((result) => {
        console.log(result);
        if (result.status === "Error") {
          setErr(result.message);
        } else if (result.status === "Failed") {
          setErr(result.message);
        } else {
          setErr("");
          const token = result.message.token;
          console.log(result.message.userdetails)
          console.log(result.message.token)
          JSON.stringify(localStorage.setItem("token", token));
          JSON.stringify(localStorage.setItem("user",JSON.stringify(result.message.userdetails)));
          Cookies.set('token', token);
          Cookies.set('user', result.message.userdetails);
          navigate("/home");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div className="sign-in-parent">
      <div className="sign-in-form-container">
        <h1 className="index-logo">LOGO</h1>
        <p>Enter Your Credentials to access your account</p>
        <br />
        <form onSubmit={submitHandler}>
          <input
            className="focus"
            type="email"
            placeholder="User Email"
            value={data.email}
            onChange={(e) => {
              setData({ ...data, email: e.target.value });
            }}
            required
          />
          <br />
          <input
            id="login-password"
            className="focus"
            type="password"
            placeholder="Password"
            value={data.password}
            onChange={(e) => {
              setData({ ...data, password: e.target.value });
            }}
            required
          />
          <br />
          <button type="submit" className="submit-button ">
            Login
          </button>
          <br />
          <p style={{ color: "red" }}>{err} </p>
          <Link to="/register">Register</Link>
        </form>
      </div>
      <div>
        <p className="para">
          Don't have an account ?{<Link to="/register">Register</Link>}
        </p>
      </div>
    </div>
  );
};
export default Login;
