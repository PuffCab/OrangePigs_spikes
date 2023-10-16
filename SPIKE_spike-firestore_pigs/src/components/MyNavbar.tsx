import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { CharactersContext } from "../context/CharactersContext";
import { AuthContext } from "../context/AuthContext";
import { Button } from "react-bootstrap";

function MyNavbar() {
  const { user, setUser, logout } = useContext(AuthContext);
  // console.log("user :>> ", user);

  return (
    <nav>
      <NavLink to="/" className="yellow">
        Home
      </NavLink>{" "}
      |<Link to="characters">Characters</Link> |
      <Link to="register">Register</Link> | <Link to="login">Login</Link> |{" "}
      <Link to="chat">Chat</Link> |{" "}
      <NavLink
        to="about"
        style={({ isActive }) => {
          return isActive ? { color: "red" } : {};
        }}
      >
        About
      </NavLink>{" "}
      |{" "}
      <NavLink to="seasons">
        {({ isActive }) => {
          return isActive ? "Seasons selected" : "Seasons";
        }}
      </NavLink>{" "}
      |{" "}
      {user ? (
        <Button variant="danger" onClick={logout}>
          Logout
        </Button>
      ) : (
        <Button variant="info">Login</Button>
      )}
      |<Link to="customHook">Test custom Hook</Link> |{" "}
    </nav>
  );
}

export default MyNavbar;
