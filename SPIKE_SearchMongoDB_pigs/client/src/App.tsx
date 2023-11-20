import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Register from "./views/Register";
import Login from "./views/Login";
import Profile from "./views/Profile";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import MyNavbar from "./components/MyNavbar";
import Home from "./views/Home";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />

        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    )
  );
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
    // <>
    //   <h1>Travel App</h1>
    //   <button onClick={logout}>logout</button>
    //   <hr />
    //   <Register />
    //   <hr />
    //   <Login />
    //   <hr />
    //   <Profile />
    // </>
    <>
      <h1>Travel App</h1>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

const Root = () => {
  return (
    <>
      <div>
        <MyNavbar />
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};
