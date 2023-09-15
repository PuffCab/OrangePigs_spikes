import React, { useEffect, useState } from "react";
import Character from "../components/Character";

function Characters() {
  console.log("%c component rendered again", "color:red");
  const [characters, setCharacters] = useState();
  const [error, setError] = useState(false);

  const [isTrue, setIsTrue] = useState(true);

  // const fetchCharacters = () => {
  //   console.log("component re-rendered");
  //   fetch("https://rickandmortyapi.com/api/character")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       if (!data.error) {
  //         //   console.log("data :>> ", data);
  //         const chars = data.results;
  //         // console.log("characters :>> ", chars);
  //         setCharacters(chars);
  //       } else {
  //         setError(true);
  //       }
  //     })
  //     .catch((error) => {
  //       setError(true);
  //       console.log("error :>> ", error);
  //     });
  // };

  //! Async/Await

  const fetchCharactersAsync = async () => {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      const chars = data.results;
      // console.log("data :>> ", data);
      setCharacters(chars);
    } catch (error) {
      console.log("error :>> ", error);
    }
  };
  // const returnString = async () => {
  //   return "i am a promise";
  // };
  // console.log(returnString());

  const changeBoolean = () => {
    setIsTrue(!isTrue);
    console.log("isTrue :>> ", isTrue);
  };
  // try {
  //   const future = undefined;
  //   console.log("my future", future.masterReact);
  // } catch (error) {
  //   console.log("We cannot predict the future :>> ", error);
  // }
  // console.log("this runs after the try/catch");
  useEffect(() => {
    console.log("%c useEffect run", "color:orange");
    // fetchCharacters();
    fetchCharactersAsync();
  }, [isTrue]);

  return (
    <div>
      <h2>Rick & Morty</h2>
      <button onClick={changeBoolean}>change boolean</button>

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
