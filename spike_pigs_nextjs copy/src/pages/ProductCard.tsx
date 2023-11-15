import React from "react";

function ProductCard({ product }) {
  return (
    <div>
      <p>{product.description}</p>
      <p>{product.title}</p>
    </div>
  );
}

export default ProductCard;
