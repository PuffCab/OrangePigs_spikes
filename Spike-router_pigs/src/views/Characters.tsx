import React, { ChangeEvent, useEffect, useState } from "react";
import CharacterCard from "../components/CharacterCard";
import SearchBar from "../components/SearchBar";
import CardGrid from "../components/CardGrid";
import { Button, Container, Row } from "react-bootstrap";

export interface CharacterType {
  gender: string;
  id: number;
  image: string;
  name: string;
  species: string;
  status: string;
}

interface InfoType {
  count: number;
  next: string | null;
  pages: number;
  prev: string | null;
}

function Characters() {
  // console.log("component rendered");
  //   const [characters, setCharacters] = useState<CharacterType | null>(null);
  const [characters, setCharacters] = useState<CharacterType[]>([
    {
      gender: "",
      id: 0,
      image: "",
      name: "",
      species: "",
      status: "",
    },
  ]);

  const [inputText, setInputText] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [url, setUrl] = useState<string | null>(
    "https://rickandmortyapi.com/api/character"
  );
  const [info, setInfo] = useState<InfoType>({
    count: 0,
    next: "",
    pages: 0,
    prev: "",
  });

  const fetchCharacters = async (url) => {
    // const response = await fetch(
    //   `https://rickandmortyapi.com/api/character?page=${pageNumber}`
    // ); //! this alternative when we only modify the page numebr
    const response = await fetch(url);
    const data = await response.json();
    // console.log("data :>> ", data);
    const charactersList = data.results as CharacterType[];
    const infoData = data.info as InfoType;
    setInfo(infoData);
    // console.log("charactersList :>> ", charactersList);
    setCharacters(charactersList);
  };

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

  const changePageNumber = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("e :>> ", e);
    const eventTarget = e.target as HTMLButtonElement;
    console.log("eventTarget.value :>> ", eventTarget.value);
    const buttonClicked = eventTarget.value;
    if (buttonClicked === "next") {
      setPageNumber(pageNumber + 1);
    }
    if (buttonClicked === "prev") {
      setPageNumber(pageNumber - 1);
    }
  };

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
    fetchCharacters(url);
  }, [url]);

  return (
    <div>
      <h2>Characters</h2>
      <div>
        {/* <Button variant="info" value="prev" onClick={changePageNumber}>
          Prev
        </Button> */}
        <Button
          variant="info"
          value="prev"
          onClick={changeUrl}
          disabled={!info?.prev}
        >
          Prev
        </Button>
        {/* <Button variant="info" value="next" onClick={changePageNumber}>
          Next
        </Button> */}
        <Button variant="info" value="next" onClick={changeUrl}>
          Next
        </Button>
      </div>
      <div>
        {/* <input type="text" onChange={inputChangeHandler} /> */}
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
