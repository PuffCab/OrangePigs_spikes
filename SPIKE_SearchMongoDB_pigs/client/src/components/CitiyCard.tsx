import React from "react";
import { Card } from "react-bootstrap";

type CityType = {
  id: string;
  name: string;
  countryCode: string;
  image: string;
  likes: number;
};

type CitiyCardProps = {
  city: CityType;
};

function CitiyCard({ city }: CitiyCardProps) {
  return (
    <Card style={{ width: "18rem" }} className="mb-2">
      <Card.Img variant="top" src={city.image} />
      <Card.Body>
        <Card.Title>
          {city.name} ({city.countryCode})
        </Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </Card.Text>
        <i className="bi bi-star-fill">{city.likes}</i>
      </Card.Body>
    </Card>
  );
}

export default CitiyCard;
