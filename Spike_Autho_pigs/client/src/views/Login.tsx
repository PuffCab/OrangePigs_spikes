import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";

type LoginCredentials = {
  email: string;
  password: string;
};
type User = {
  userName: string;
  email: string;
  userImage?: string;
};
type LoginResponse = {
  msg: string;
  user: User;
  token: string;
};

function Login() {
  const [loginCredentials, setLoginCredentials] =
    useState<LoginCredentials | null>(null);

  const handleLoginInput = (e: ChangeEvent<HTMLInputElement>) => {
    // console.log("e.target.name :>> ", e.target.name);
    setLoginCredentials({
      ...(loginCredentials as LoginCredentials),
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("loginCredentials :>> ", loginCredentials);

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    const urlencoded = new URLSearchParams();
    urlencoded.append("email", loginCredentials!.email);
    urlencoded.append("password", loginCredentials!.password);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
    };

    try {
      const response = await fetch(
        "http://localhost:5001/api/users/login",
        requestOptions
      );

      if (response.ok) {
        const result: LoginResponse = await response.json();
        console.log("result. :>> ", result);
        const token = result.token;
        if (token) {
          localStorage.setItem("token", token);
        }
      }
    } catch (err) {
      const error = err as Error;
      console.log("error :>> ", error.message);
    }
  };

  const isUserLoggedIn = () => {
    const token = localStorage.getItem("token");

    return token ? true : false;
  };

  useEffect(() => {
    const isLoggedIn = isUserLoggedIn();
    if (isLoggedIn) {
      console.log("user LoggedIn");
    } else {
      console.log("user is NOT logged in");
    }
  }, []);

  return (
    <div>
      <h2>Login</h2>

      <div>
        <form onSubmit={handleSubmitLogin} className="input-form">
          <label htmlFor="email">
            email{" "}
            <input
              type="text"
              name="email"
              id="email"
              onChange={handleLoginInput}
            />
          </label>

          <label htmlFor="password">
            password{" "}
            <input
              type="password"
              name="password"
              id="password"
              onChange={handleLoginInput}
            />
          </label>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
