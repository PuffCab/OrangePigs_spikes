import type { NextApiRequest, NextApiResponse } from "next";

export interface ProductType {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

type Data = {
  product: ProductType;
};
type ErrorResponse = {
  error: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | ErrorResponse>
) {
  console.log("req :>> ", req.query.productId);
  const productId = req.query.productId;
  //Go to your DB and get a product by ID
  //in this exercise we will use an external api
  if (productId) {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/${productId}`
      );
      const result: ProductType = await response.json();
      res.status(200).json({ product: result });
    } catch (error) {}
  } else {
    res.status(500).json({ error: "you need to provide a product ID" });
  }

  //
}
