import React, { useState } from "react";
import "../style/CharacterCardStyle.css";
import { Button } from "react-bootstrap";
import CardModal from "./CardModal";
import { Link } from "react-router-dom";
import { CharacterType } from "../types/customTypes";
interface CharacterCardProps {
  char: CharacterType;
}

function CharacterCard({ char }: CharacterCardProps) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={char.image}
            alt="Avatar"
            style={{ width: "200px", height: "200px" }}
          />
        </div>
        <div className="flip-card-back">
          <Link to={`${char.name}`}>
            <h3>{char.name}</h3>
          </Link>

          <p>gender: {char.gender}</p>
          <Button variant="primary" onClick={handleShow}>
            Launch demo modal
          </Button>
          <CardModal handleClose={handleClose} show={show} char={char} />
        </div>
      </div>
    </div>
  );
}

export default CharacterCard;
