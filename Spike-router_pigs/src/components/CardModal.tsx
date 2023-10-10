import React from "react";
import { Button, Modal } from "react-bootstrap";
import { CharacterType } from "../views/Characters";

interface CardModalProps {
  show: boolean;
  handleClose: () => void;
  char: CharacterType;
}

function CardModal({ handleClose, show, char }: CardModalProps) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>{char.name}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CardModal;
