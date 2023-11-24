import ProductCard from "@/components/ProductCard";
import { GetServerSideProps } from "next";
import React from "react";
import { Alert } from "react-bootstrap";

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

export const getServerSideProps: GetServerSideProps<
  ComponentProps
> = async () => {
  const response = await fetch("https://fakestoreapi.com/products/1");
  const result: ProductType = await response.json();
  console.log("this is visible only in the terminal");
  return {
    props: { product: result },
  };
};

function serverSideRender({ product }: ComponentProps) {
  console.log("product in my client :>> ", product);
  console.log("this one is visible in both the terminal and browser");
  console.log(process.env.SECRET);

  return (
    <div>
      <h1>Product View</h1>
      <Alert>This page is pre-rendered in the server</Alert>
      <div>
        {/* <p>{product.description}</p>
        <p>{product.title}</p> */}
        <ProductCard product={product} />
      </div>
    </div>
  );
}

export default serverSideRender;
