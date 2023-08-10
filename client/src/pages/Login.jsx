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
      const response = await axios.post("https://project-game.onrender.com/login", data);
      const { message } = response.data;
      if (!message) {
        // console.log(response.data[0]);
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
    <div className="login">
      <form onSubmit={handleSubmit} className="login-form">
        <div className="login-inputs">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {wrong && <p>Wrong credentials</p>}
    </div>
  );
};

export default Login;