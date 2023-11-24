import ProductCard from "@/components/ProductCard";
import Head from "next/head";
import React, { ChangeEvent, useState } from "react";
import { Button } from "react-bootstrap";

export interface ProductType {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

function SearchProduct() {
  const [productId, setProductId] = useState("");
  const [product, setProduct] = useState<ProductType | null>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("e.target.value :>> ", e.target.value);
    setProductId(e.target.value);
  };

  const fetchProduct = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/getProduct?productId=${productId}`
      );
      const result = await response.json();
      const product: ProductType = result.product;
      setProduct(product);
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  return (
    <>
      <Head>
        <title>Search Page</title>
      </Head>
      <h1>Search Page</h1>
      <input
        type="number"
        placeholder="product id"
        min="0"
        max="19"
        onChange={handleInputChange}
      />
      <Button variant="info" onClick={fetchProduct}>
        Search
      </Button>
      <div>{product && <ProductCard product={product} />}</div>
    </>
  );
}

export default SearchProduct;
