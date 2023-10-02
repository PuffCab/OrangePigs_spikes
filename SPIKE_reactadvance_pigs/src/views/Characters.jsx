import React, { useEffect, useState } from "react";
import Character from "../components/Character";

function Characters() {
  const [characters, setCharacters] = useState();
  const [error, setError] = useState(false);

  const fetchCharacters = () => {
    console.log("component re-rendered");
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (!data.error) {
          //   console.log("data :>> ", data);
          const chars = data.results;
          console.log("characters :>> ", chars);
          setCharacters(chars);
        } else {
          setError(true);
        }
      })
      .catch((error) => {
        setError(true);
        console.log("error :>> ", error);
      });
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <div>
      <h2>Rick & Morty</h2>

      {/* {
        //! conditional rendering}
        characters &&
          characters.map((character) => {
            return <p key={character.id}>{character.name}</p>;
          })
          } */}

      {/* //! With ternary operator */}
      {characters ? (
        characters.map((character) => {
          return (
            <div key={character.id}>
              <Character character={character} />
            </div>
          );
        })
      ) : (
        <h1>....loading...</h1>
      )}

      {error && <h1>...Something went wrong</h1>}
    </div>
  );
}

export default Characters;
