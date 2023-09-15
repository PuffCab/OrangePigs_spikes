import React from "react";

function AsyncAwait() {
  function returnPromise() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("%cpromise resolved", "color:green");
        resolve("promise solved");
      }, 3000);
    });
  }

  async function asyncFunction() {
    const myString = "did I run first?";
    const getResolvedPromise = await returnPromise();
    console.log("%c my string", "color:orange", myString);
  }
  asyncFunction();

  // Try / Catch
  try {
    const someVariable = undefined;
    console.log(someVariable.name);
  } catch (error) {
    console.log("my error :>> ", error);
  }

  console.log("I run after the error");

  return (
    <div>
      <h2>AsyncAwait playground</h2>
    </div>
  );
}

export default AsyncAwait;
