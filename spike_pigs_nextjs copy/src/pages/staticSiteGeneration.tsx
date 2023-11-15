import { GetStaticProps } from "next";
import Head from "next/head";
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

export const getStaticProps: GetStaticProps<ComponentProps> = async () => {
  const randomId = Math.floor(Math.random() * 19);

  const response = await fetch(`https://fakestoreapi.com/products/${randomId}`);
  const result: ProductType = await response.json();

  return {
    props: {
      product: result,
    },
  };
};

function staticSiteGeneration({ product }: ComponentProps) {
  return (
    <div>
      <Head>
        <title key="title">Fake store:random product</title>
      </Head>
      <h1>Check a random product every time</h1>
      <Alert>This page is rendered alreay in the server</Alert>
      <div>
        <p>{product.price}</p>
        <p>{product.title}</p>
      </div>
    </div>
  );
}

export default staticSiteGeneration;
