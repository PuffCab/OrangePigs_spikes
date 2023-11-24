import ProductCard from "@/components/ProductCard";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import React from "react";

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

export const getStaticPaths: GetStaticPaths = () => {
  const slugs = ["1", "2", "3", "4"];

  const paths = slugs.map((slug) => {
    return {
      params: {
        productId: slug,
      },
    };
  });
  console.log("paths :>> ", paths);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<ComponentProps> = async (
  context
) => {
  console.log("context :>> ", context);
  const id = context.params?.productId;
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const result: ProductType = await response.json();
  console.log("result :>> ", result);
  return {
    props: { product: result },
  };
};

function SingleProduct({ product }: ComponentProps) {
  const router = useRouter();
  console.log("router :>> ", router);
  return (
    <>
      <h1> info about product {router.query.productId}</h1>
      <div>
        <ProductCard product={product} />
      </div>
    </>
  );
}

export default SingleProduct;
