import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [wrong, setWrong] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { email, password };

    try {
      const response = await axios.post("http://localhost:5000/login", data);
      const { message } = response.data;
      if (!message) {
        console.log(response.data[0]);
        navigate("/");
      } else {
        throw new Error("Wrong user");
      };

    } catch (error) {
      console.error('An error occurred:', error);
      setEmail("");
      setPassword("");
      setWrong(true);
      setTimeout(() => {
        setWrong(false);
      }, 2000);
    };
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
        <br />
        <button type="submit">Login</button>
      </form>
      {wrong && <p>Wrong credentials</p>}
    </>
  );
};

export default Login;