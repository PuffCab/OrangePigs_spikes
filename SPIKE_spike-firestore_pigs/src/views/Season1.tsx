import React, { useContext } from "react";
import { CharactersContext } from "../context/CharactersContext";

function Season1() {
  const { characters } = useContext(CharactersContext);

  return (
    <>
      <h2>Season 1</h2>
      <p>{characters[0].name}</p>
      <p>{characters[1].name}</p>
    </>
  );
}

export default Season1;
