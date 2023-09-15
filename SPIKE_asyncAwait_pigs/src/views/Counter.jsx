import React, { useState } from "react";

// ! Object Destructuring
//   const person = {
//     name: "Tom",
//     hairColor: "brown",
//   };
//   const hairColor = person.hairColor;
//   const name = person.name;

//   const { hairColor, name } = person;

//! Array Destructuring

//   const colors = ["red", "blue"];
//   const [color1, color2] = colors;
//   console.log("color1 :>> ", color1);
//   console.log("color2 :>> ", color2);

function Counter() {
  console.log("%c component rendered", "color:red");

  // let number = useState(1);
  // const [number, myFunction] = useState(1)
  let [number, setNumber] = useState("hello");

  console.log("number :>> ", number);

  const increaseNumber = () => {
    //   number++;
    setNumber(number + 1);
    console.log("number :>> ", number);
  };

  const reRenderComponent = () => {
    setNumber();
  };

  return (
    <div>
      <h2>{number}</h2>
      <button onClick={increaseNumber}>Increase</button>
      <button onClick={reRenderComponent}>Re render </button>
      <button onClick={() => setNumber(number + 100)}>increase 100</button>
    </div>
  );
}

export default Counter;
