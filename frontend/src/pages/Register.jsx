import React, { useState } from "react";
import { registerUser } from "../services/api";
import { useNavigate } from "react-router-dom";
import "../styles/Register.css"

const Register = () => {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting form:", form);
    try {
        const response = await registerUser(form);
        console.log("Response from server:", response.data); 
        navigate("/login");
    } catch (error) {
        console.error("Error:", error.response ? error.response.data : error.message);
    }
  };

  return (
    <div  className="register-container">
      <h2 className="register-title">Register</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <input type="text" name="username" placeholder="Username" onChange={handleChange} required className="input-field"/>
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required className="input-field"/>
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required className="input-field"/>
        <button type="submit" className="register-btn">Register</button>
      </form>
    </div>
  );
};

export default Register;
