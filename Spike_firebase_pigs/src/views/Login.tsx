import React, { ChangeEvent, FormEvent, useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    // console.log("email :>> ", email);
  };
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    // console.log("password :>> ", password);
  };

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log("email, password :>> ", email, password);
    login(email, password);
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input type="text" id="email" onChange={handleEmailChange} />
        <label htmlFor="email">Email</label>
        <input type="password" id="password" onChange={handlePasswordChange} />
        <label htmlFor="password">Password</label>
        <button type="submit">Login</button>
      </form>
    </>
  );
}
export default Login;
