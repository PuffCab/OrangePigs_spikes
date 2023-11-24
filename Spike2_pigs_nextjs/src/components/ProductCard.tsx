import Image from "next/image";
import React from "react";
import { Button, Card } from "react-bootstrap";
import localImage from "@/assets/12.2-ISG_diagram.jpeg";

export interface ProductType {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

type ComponentProps = {
  product: ProductType;
};

function ProductCard({ product }: ComponentProps) {
  return (
    <Card style={{ width: "18rem" }}>
      {/* <Card.Img variant="top" src={product.image} /> */}
      <Image
        // src={localImage}
        src={product.image}
        alt="randon image"
        width={200}
        height={200}
        // fill
      />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
