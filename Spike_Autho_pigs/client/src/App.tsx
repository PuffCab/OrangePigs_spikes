import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Register from "./views/Register";
import Login from "./views/Login";

function App() {
  const [isUserLogged, setIsUserLogged] = useState(false);
  const isUserLoggedIn = () => {
    const token = localStorage.getItem("token");

    return token ? true : false;
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsUserLogged(false);
  };

  useEffect(() => {
    const isLoggedIn = isUserLoggedIn();

    if (isLoggedIn) {
      console.log("user LoggedIn");
      setIsUserLogged(true);
    } else {
      console.log("user is NOT logged in");
      setIsUserLogged(false);
    }
  }, [isUserLogged]);
  return (
    <>
      <h1>Travel App</h1>
      <button onClick={logout}>logout</button>
      <hr />
      <Register />
      <hr />
      <Login />
    </>
  );
}

export default App;
