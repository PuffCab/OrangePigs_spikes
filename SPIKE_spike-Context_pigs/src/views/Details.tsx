import React from "react";
import { useParams } from "react-router-dom";

function Details() {
  const { characterName } = useParams();
  //   console.log("param :>> ", param);

  //Fetch using the character name

  return <h2>See more info about {characterName}</h2>;
}

export default Details;
