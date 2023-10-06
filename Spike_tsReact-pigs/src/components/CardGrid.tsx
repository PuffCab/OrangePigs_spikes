import React from "react";
import { Col } from "react-bootstrap";
import CharacterCard from "./CharacterCard";
import { CharacterType } from "../views/Characters";

type CardGridProps = {
  filteredCharacters: CharacterType[];
};

const CardGrid = ({ filteredCharacters }: CardGridProps) => {
  return (
    <>
      {filteredCharacters &&
        filteredCharacters.map((char) => {
          return (
            <Col key={char.id}>
              <CharacterCard
                // gender={char.gender}
                // image={char.image}
                // name={char.name}
                char={char}
              />
            </Col>
          );
        })}
    </>
  );
};

export default CardGrid;
