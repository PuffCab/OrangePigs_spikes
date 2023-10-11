import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import CardGrid from "../components/CardGrid";
import { Button, Container, Row } from "react-bootstrap";
import { CharacterType, InfoType } from "../types/customTypes";
import { CharactersContext } from "../context/CharactersContext";

function Characters() {
  // console.log("component rendered");

  //? Subscribe component to the context
  const { characters, fetchCharacters, info, url, setUrl, deleteAll } =
    useContext(CharactersContext);

  //   const [characters, setCharacters] = useState<CharacterType | null>(null);

  const [inputText, setInputText] = useState("");

  const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    // console.log("event.target.value :>> ", event.target.value);
    const text = event.target.value;
    setInputText(text);
  };

  const filteredCharacters = characters.filter((char) => {
    const normalizedCharName = char.name.toLowerCase();
    const normalizedInputText = inputText.toLowerCase();
    return normalizedCharName.includes(normalizedInputText);
  });

  const changeUrl = (e: React.MouseEvent<HTMLButtonElement>) => {
    const eventTarget = e.target as HTMLButtonElement;
    const buttonClicked = eventTarget.value;
    if (buttonClicked === "next") {
      setUrl(info.next);
    }
    if (buttonClicked === "prev") {
      setUrl(info.prev);
    }
  };

  useEffect(() => {
    // console.log("%c useEffect run", "color:orange");
    fetchCharacters(url!);
  }, [url]);

  return (
    <div>
      <h2>Characters</h2>
      <Button variant="danger" onClick={deleteAll}>
        Do not touch this button
      </Button>
      <div>
        <Button
          variant="info"
          value="prev"
          onClick={changeUrl}
          disabled={!info?.prev}
        >
          Prev
        </Button>

        <Button variant="info" value="next" onClick={changeUrl}>
          Next
        </Button>
      </div>
      <div>
        <SearchBar inputChangeHandler={inputChangeHandler} />
        <Container>
          <Row>
            <CardGrid filteredCharacters={filteredCharacters} />
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Characters;
