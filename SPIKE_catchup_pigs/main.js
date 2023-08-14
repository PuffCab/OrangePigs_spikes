// console.log("products", products);
// var tableBody = document.querySelector("tbody");
// function buildProductsTable() {
//   var tableBodyArray = document.getElementsByTagName("tbody");

//   console.log("tableBody :>> ", tableBody);
//   //   console.log("tableBodyArray :>> ", tableBodyArray);

//   for (let i = 0; i < products.length; i++) {
//     const row = document.createElement("tr");

//     //crate products
//     const productName = document.createElement("td");
//     productName.innerText = products[i].title;

//     const price = document.createElement("td");

//     price.innerText = products[i].price;

//     row.appendChild(productName);
//     row.appendChild(price);
//     tableBody.appendChild(row);
//   }
// }

// buildProductsTable();

function getRecipes() {
  fetch(
    "https://api.spoonacular.com/recipes/716429/information?apiKey=" +
      API_KEY +
      "&includeNutrition=true"
  )
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      console.log("result :>> ", result);
    });
}

getRecipes();
console.log("API_KEY :>> ", API_KEY);
