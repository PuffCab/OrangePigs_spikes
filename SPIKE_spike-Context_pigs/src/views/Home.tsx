import React, { useContext } from "react";
import { CharactersContext } from "../context/CharactersContext";
import { AuthContext } from "../context/AuthContext";

function Home() {
  // Subscribe Home to the context
  const { characters } = useContext(CharactersContext);

  const { user } = useContext(AuthContext);
  return (
    <>
      <h1>Home</h1>;<h2> Hi {user?.userName}!. Welcome to our app</h2>
      <h3>
        Here you will know {characters.length > 1 ? characters.length : "many"}{" "}
        characters from Rick & Morty
      </h3>
    </>
  );
}

export default Home;
