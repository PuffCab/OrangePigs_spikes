// console.log("products", products);

const getData = () => {
  const url = "https://fakestoreapi.com/products/";
  fetch("https://fakestoreapi.com/products/1231233")
    .then((response) => {
      // console.log("inside fetch block");
      // console.log("response :>> ", response.json());
      return response.json();
    })
    .then((result) => {
      console.log("result :>> ", result);
      const products = result;
      buildCards(products);
      showProducts(products);
      return result;
    })
    .catch((error) => {
      console.log("error :>> ", error);
    });
  // console.log(fetch("https://fakestoreapi.com/products/"));
};

// fetch("url....").then(function (response) { return response.json() }).then(function (result) {
//   console.log('result :>> ', result);
// })

getData();

// JS definition : Single Threaded blocking language

console.log("one");
console.log("two");
console.log("three");
// console.log("result :>> ", result);
function sum(a, b) {
  console.log("a :>> ", a, " b >>", b);
}
sum("hey", "there");

function buildCards(products) {
  //   const cardsContainer = document.getElementById("cards-container");
  const cardsContainer = document.querySelector(".row");
  console.log("cardsContainer :>> ", cardsContainer);

  for (let i = 0; i < products.length; i++) {
    // console.log("products[i] :>> ", products[i]);

    //car div
    const cardDiv = document.createElement("div");
    cardDiv.setAttribute("class", "card col-sm-12 col-md-6 col-lg-2");
    // cardDiv.classList.add("random-class");
    // cardDiv.setAttribute("style", "width: 18rem;");

    if (i % 2 === 0) {
      cardDiv.classList.add("text-bg-primary");
    } else {
      cardDiv.classList.add("red");
    }

    //image
    const image = document.createElement("img");
    image.setAttribute("src", products[i].image);
    image.setAttribute("alt", products[i].title);
    image.setAttribute("class", "card-img-top");
    cardDiv.appendChild(image);

    cardsContainer.appendChild(cardDiv);

    //card body
    const cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body");
    cardDiv.appendChild(cardBody);

    //card header
    const h5 = document.createElement("h5");
    h5.classList.add("card-title");
    h5.innerText = products[i].title;
    cardBody.appendChild(h5);

    //p price
    const p = document.createElement("p");
    p.setAttribute("class", "card-text");
    p.innerText = products[i].price;
    cardBody.appendChild(p);
  }
  // showProducts(products);
}

function showProducts(products) {
  console.log("show all products", products);
}
// buildCards();

function sayHello() {
  alert("hello there");
}
// sayHello();

//! Event Listeners

function changeToRed(event) {
  console.log("event :>> ", event.target.value);
  const regularButton = document.getElementById("regular-button");
  //   regularButton.classList.add("red");
  regularButton.classList.toggle("red");
}

function addEventListener() {
  const regularButton = document.getElementById("regular-button");
  regularButton.addEventListener("click", function () {
    regularButton.classList.add("red");
  });
  regularButton.addEventListener("click", () => {
    regularButton.classList.add("red");
  });
  // regularButton.addEventListener("click", changeToRed);
}
addEventListener();

function alertBox(event) {
  event.stopPropagation();
  //   console.log("event :>> ", event.currentTarget.tagName);
  alert("you clicked " + event.currentTarget.tagName);
  //   alert("you clicked " + event.target.tagName);
}

function bubblingCapturing() {
  const myHtml = document.getElementById("html");
  const body = document.getElementById("body");
  const regDiv = document.getElementById("reg-button-div");
  const regularButton = document.getElementById("regular-button");

  myHtml.addEventListener("click", alertBox, true);
  body.addEventListener("click", alertBox, true);
  regDiv.addEventListener("click", alertBox, true);
  regularButton.addEventListener("click", alertBox, true);
}
// bubblingCapturing();

//! CallBacks

// function one() {
//   console.log("I am a callback");
// }

// function two(randomName) {
//   console.log("i am NOT a callback");
//   randomName();
// }

// two(one);

//* without callbacks

// let calculator = function (num1, num2, operationType) {
//   if (operationType === "add") {
//     return num1 + num2;
//   } else if (operationType === "multiply") {
//     return num1 * num2;
//   }
// };

// console.log(calculator(3, 5, "multiply"));

//* WITH Callbacks

// function add(a, b) {
//   return a + b;
// }
// function multiply(a, b) {
//   return a * b;
// }

// function revealsNumbers(a, b) {
//   console.log("you selected number " + a + " and " + b);
// }

// let calculator = function (num1, num2, callback) {
//   if (typeof callback === "function") {
//     return callback(num1, num2);
//   } else {
//     console.log("this is not a math operation");
//   }
// };

// console.log(calculator(67, 89, multiply));
// console.log(calculator(100, 2, "sasdasd"));
// console.log(
//   calculator(5, 6, function (a, b) {
//     return a - b;
//   })
// );
