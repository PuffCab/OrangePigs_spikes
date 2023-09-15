import React from "react";
import { Button } from "react-bootstrap";
import ButtonMUI from "@mui/material/Button";

function Character({ character }) {
  return (
    <div>
      <p>{character.name}</p>
      <p>{character.gender}</p>
      <Button variant="success">show more</Button>
      <ButtonMUI variant="contained">MUI button</ButtonMUI>
    </div>
  );
}

export default Character;
