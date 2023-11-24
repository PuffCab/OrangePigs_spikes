import Link from "next/link";

import React from "react";

function Product() {
  return (
    <>
      <h1>Visit any of our products</h1>
      <nav>
        <Link href="/product/1"> Product 1</Link> |{" "}
        <Link href="/product/2"> Product 2</Link> |{" "}
        <Link href="/product/3"> Product 3</Link> |{" "}
        <Link href="/product/4"> Product 4</Link>
      </nav>
    </>
  );
}

export default Product;
