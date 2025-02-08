import React, { useState } from "react";
import { loginUser } from "../services/api";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("Form submitted!");
    console.log("Form submitted!");
    try {
        const res = await loginUser(form);
        console.log("Login Response:", res); 

        if (!res || !res.data || !res.data.token) {
            throw new Error("Invalid response from server");
        }

        localStorage.setItem("token", res.data.token);
        console.log("Token Stored:", localStorage.getItem("token"));
        navigate("/");
    } catch (error) {
        console.error("Login Error:", error.response ? error.response.data : error.message);
    }
};

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit" onClick={handleSubmit}>Login</button>
      </form>
    </div>
  );
};

export default Login;
