//VAR

// console.log(myName);

// var myName = "Raúl";
// console.log("myName :>> ", myName);
// var myName = ["one"]; // redeclare
// console.log("myName :>> ", myName);
// myName = "Helene"; // reassign
// if (true) {
//   var myName = "Tom";
// }
// console.log(myName);

// LET
// let myNumber;
// console.log(myNumber);
// let myNumber = 34;

// myNumber = "Raul";
// console.log(myNumber);
// let myNumber = 1000;

// if (true) {
//   let myNumber = "some number";
//   console.log("myNumber inside if :>> ", myNumber);
// }
// console.log("myNumber :>> ", myNumber);

// CONST
// const myCat = "Ruby";
// console.log(myCat);
// // const myCat = "Ruby";

// myCat = "oasdsad";

// console.log("myCat :>> ", myCat);

const user = {
  id: 1,
  userName: "Raul",
};
console.log("user :>> ", user);
user.userName = "Helene";
console.log("user :>> ", user);
let car;
console.log("car :>> ", car);

// Function Declaration

function someName() {
  //some code to execute
}

//Function expression

const myFunction = function () {
  //some code here
};
const myFunction2 = function someName() {
  //some code here
};

const sum = function () {
  return 2;
};

console.log("sum() :>> ", sum());
const myNumber = sum();

console.log("myNumber :>> ", myNumber);

// hoisting of a function declaration

// sayHi();
// function sayHi() {
//   console.log("Hi");
// }

// hoisting of a function expression -> spoiler alert : dont get hoisted

// sayHi();
// const sayHi = function () {
//   console.log("Hi");
// };

// Arrow Functions

const arrowFunction = () => {
  //some code here
};

//! ES6 LOOPS

// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
// }

//? FOREACH() has a return type of undefined, and is not chainable

const getCatfacts = () => {
  fetch("https://catfact.ninja/facts")
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      console.log("result :>> ", result);
      //   forEachPlayGround(result.data);
      //   mapPlayGround(result.data);
      //   filterPlayGround(result.data);
    });
};
getCatfacts();

const forEachPlayGround = (catFacts) => {
  console.log("catFacts :>> ", catFacts);
  catFacts.forEach((catFact, index, originalArray) => {
    // console.log("catFact :>> ", catFact);
    // console.log("index :>> ", index);
    // console.log("originalArray :>> ", originalArray);
    catFact.newFact = "I prefer dogs"; // .forEach() is a MUTATOR. Can modify the value of the original array
    console.log("catFact :>> ", catFact);
  });
};

//? FILTER

const filterPlayGround = (catFacts) => {
  //   console.log("catFacts :>> ", catFacts);
  const filteredCatfacts = catFacts.filter((catFact, i, originalArray) => {
    // console.log("catFact :>> ", catFact);
    // return catFact.fact.includes("dogs");
    // return catFact.length > 100;
    console.log("i :>> ", i);
    console.log("originalArray :>> ", originalArray);
    return 3 < 2;
  });
  console.log("filteredCatfacts :>> ", filteredCatfacts);
};
// filterPlayGround();

// MAP : like a forEach (a mutator), but retursn something, and is chainable

function mapPlayGround(catFacts) {
  //   const mappedCatFacts = catFacts.map((catFact) => {
  //     console.log("catFact :>> ", catFact);
  //     return catFact.fact;
  //   });
  //     console.log("mappedCatFacts :>> ", mappedCatFacts);

  //   const mappedCatFacts = catFacts.map((catFact) => {
  //     console.log("catFact :>> ", catFact);
  //     return catFact.fact;
  //   });
  // .filter((fact) => {
  //   return fact.includes("dogs");
  // }); // we can chain a .filter to filter the result of the map

  //   console.log("mappedCatFacts :>> ", mappedCatFacts);

  // how to avoid mutating the original array

  const mappedCatFacts = catFacts.map((catFact) => {
    //    console.log("catFact :>> ", catFact);
    // return (catFact.newFact = "Cats live forever"); // this mutates the original array
    // return Object.assign({}, catFact, { newFact: "cats are not dogs" }); // this doesn't mutate the original array

    return { ...catFact, newFact: "no cats flew to space" };
  });
  console.log("mappedCatFacts :>> ", mappedCatFacts);
}

// Spread Operator

const num1 = [1, 2, 3];
// const num2 = [...num1, 4, 5];
const num2 = [4, 5];
const num3 = [...num1, ...num2];

console.log("num3 :>> ", num3);

const user1 = {
  id: 1,
  name: "Raúl",
};
const user2 = {
  name: "Tom",
};

// const user3 = { ...user1, ...user2 };
const user3 = { ...user2, ...user1 };
console.log("user3 :>> ", user3);

// Template Literals

// const rafal = "Rafal";
// const greet = "Hi, I am " + rafal + ", have a good day";
// with Template literals  (with `` backticks)
// const greet = `Hi I am ${rafal} , have a good day`;
// console.log(greet);

// // "https://fakestoreapi.com/products/1" + apiKey + "query=" +;
// `https://fakestoreapi.com/products/1${apikey}query=${someData}`;

// Logic Operators

// OR operator ||

const raul = 20;
const rafal = 25;

// if (raul < 15 || rafal < 10) {
//   console.log("you got in the club");
// } else {
//   console.log("try tomorrow");
// }

// &&

if (raul > 15 && rafal > 10) {
  console.log("you got in the club");
} else {
  console.log("try tomorrow");
}

// Truthy and falsy

// const result = "" && "something";
// const result = 2 && 0;
// const result = "abc" && 4;
const result = "" || 5;
console.log("result :>> ", result);
