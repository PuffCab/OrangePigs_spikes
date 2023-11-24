import ProductCard from "@/components/ProductCard";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";

export interface ProductType {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: RatingType;
}

export interface RatingType {
  rate: number;
}

function ClientSideRender() {
  const [products, setProducts] = useState<ProductType[] | null>(null);

  useEffect(() => {
    let controller = new AbortController();
    const signal = controller.signal;
    const fetchProduct = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products", {
          signal,
        });
        if (response.ok) {
          const result: ProductType[] = await response.json();
          console.log("result :>> ", result);
          setProducts(result);
        } else {
          alert("server response is not OK");
        }
      } catch (error) {
        console.log("error :>> ", error);
      }
    };

    fetchProduct();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div>
      <Head>
        <title key="title">fake Store</title>
      </Head>
      <h1>Client side render</h1>
      <Alert>This page is rendered by the browser</Alert>
      <div>
        <h2>Products List</h2>
        {products &&
          products.map((product) => {
            return <ProductCard product={product} key={product.id} />;
          })}
      </div>
    </div>
  );
}

export default ClientSideRender;
