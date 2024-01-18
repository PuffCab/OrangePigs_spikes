import React, { useState } from "react";
import { useEffect } from "react";

function FunctionalComponent() {
  const [characters, setCharacters] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      console.log("data", data);
      setCharacters(data.results);
    } catch (error) {
      console.log(error);
      setError(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2>Characters</h2>
      {characters &&
        characters.map((character) => {
          return <img key={character.id} src={character.image} alt="" />;
        })}
    </div>
  );
}

export default FunctionalComponent;
