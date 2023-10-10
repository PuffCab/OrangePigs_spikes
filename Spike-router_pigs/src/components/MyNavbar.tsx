import React from "react";
import { Link, NavLink } from "react-router-dom";

function MyNavbar() {
  return (
    <nav>
      <NavLink to="/" className="yellow">
        Home
      </NavLink>{" "}
      |<Link to="characters">Characters</Link> |{" "}
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
      </NavLink>
    </nav>
  );
}

export default MyNavbar;
