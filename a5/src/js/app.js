/**
 * WEB222 â€“ Assignment 05
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       <Xiaoyue Zhao>
 *      Student ID: <124899212>
 *      Date:       <Aug 10>
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { products, categories } = window;

// For debugging, display all of our data in the console
console.log({ products, categories }, "Store Data");

document.addEventListener("DOMContentLoaded", function () {
  console.log("window DOMContentLoaded");

  // Dynamically create menu category buttons
  let nav = document.querySelector("#menu");
  window.categories.forEach(function (el) {
    let categoryBtn = document.createElement("button");
    categoryBtn.id = el.id;
    categoryBtn.innerHTML = el.name;
    nav.appendChild(categoryBtn);
  });

  // Dynamically update the selected category title
  let h2 = document.querySelector("#selected-category");
  let button = document.querySelectorAll("#menu button");

  // default display first category products
  h2.innerHTML = window.categories[0].name;
  createProductCard(window.categories[0].id);

  // display clicked category products
  button.forEach(function (el) {
    el.addEventListener("click", function () {
      h2.innerHTML = el.innerHTML;
      createProductCard(this.id);
    });
  });

  // Dynamically update the product cards
  function createProductCard(currentCategory) {
    let cards = document.querySelector("#cards");
    cards.innerHTML = "";

    // select continued products
    let productCards = [];
    productCards = window.products.filter(
      (el) => el.categories.includes(currentCategory) && el.discontinued === false
    );

    // Dynamically update the selected category products
    productCards.forEach(function (el) {
      let card = document.createElement("div");
      // Add the .card class to the <div>
      card.classList.add("card");
      // Create a <h2> to hold the title
      let h2 = document.createElement("h2");
      // Create a product image, use the .card-image class
      let productImage = document.createElement("img");
      productImage.classList.add("card-image");
      // Create a <div> to hold the product content
      let content = document.createElement("div");
      content.classList.add("content");
      // Create a <p> to hold the price/desc
      let p1 = document.createElement("p");
      let p2 = document.createElement("p");
      p2.classList.add("text");
      // Create a <button> to hold the select button
      let button = document.createElement("button");

      h2.innerHTML = el.title;
      productImage.src = el.imageUrl;
      p1.innerHTML = "$" + el.price;
      p2.innerHTML = el.description;
      button.innerHTML = "SELECT";

      card.appendChild(h2);
      card.appendChild(productImage);
      card.appendChild(content);
      card.appendChild(button);
      content.appendChild(p1);
      content.appendChild(p2);
      cards.appendChild(card);
    });
  }
});
