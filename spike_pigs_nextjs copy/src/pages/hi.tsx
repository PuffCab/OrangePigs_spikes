import React from "react";
import styles from "@/styles/hi.module.css";
import Head from "next/head";
import { Button } from "react-bootstrap";

function hi() {
  console.log(process.env.SECRET);
  console.log(process.env.NEXT_PUBLIC_SECRET);
  return (
    <div>
      <Head>
        <title key="title">Hi page</title>
      </Head>
      <h1 className={styles.myH1}>Hello NextJS world</h1>
      <button type="button" className="btn btn-primary">
        "regular" Bootstrap button
      </button>
      <Button>React-Bootstrap Button</Button>
    </div>
  );
}

export default hi;
