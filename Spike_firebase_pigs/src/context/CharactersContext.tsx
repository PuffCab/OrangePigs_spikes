import { ReactNode, createContext, useState } from "react";
import { CharacterType, InfoType } from "../types/customTypes";

interface CharactersContextType {
  characters: CharacterType[];
  info: InfoType;
  url: string | null;
  fetchCharacters: (url: string) => Promise<void>;
  setUrl: (url: string | null) => void;
  deleteAll: () => void;
}

const initialContext = {
  characters: [
    {
      gender: "",
      id: 0,
      image: "",
      name: "",
      species: "",
      status: "",
    },
  ],
  info: {
    count: 0,
    next: "",
    pages: 0,
    prev: "",
  },
  url: null,
  fetchCharacters: () => Promise.resolve(),
  setUrl: () => console.log("context not initialised"),
  deleteAll: () => console.log("context not initialised"),
};

interface ProviderPropsType {
  children: ReactNode;
}

//? 1- Create the Context
export const CharactersContext =
  createContext<CharactersContextType>(initialContext);

//? 2-Define whats inside of our Store

export const CharactersContextProvider = (props: ProviderPropsType) => {
  console.log("props :>> ", props);

  //? 3- Move here all the states and functions needed
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
  const [info, setInfo] = useState<InfoType>({
    count: 0,
    next: "",
    pages: 0,
    prev: "",
  });
  const [url, setUrl] = useState<string | null>(
    "https://rickandmortyapi.com/api/character"
  );
  const fetchCharacters = async (url: string) => {
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

  const deleteAll = () => {
    setCharacters([
      {
        gender: "",
        id: 0,
        image: "",
        name: "",
        species: "",
        status: "",
      },
    ]);
  };

  return (
    <CharactersContext.Provider
      value={{ characters, info, url, fetchCharacters, setUrl, deleteAll }}
    >
      {props.children}
    </CharactersContext.Provider>
  );
};
