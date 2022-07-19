/**
 * WEB222 – Assignment 04
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
 *      Date:       <July 17>
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

  // default first category display
  h2.innerHTML = window.categories[0].name;
  displayTargetProducts(window.categories[0].id);

  button.forEach(function (el) {
    el.addEventListener("click", function () {
      h2.innerHTML = el.innerHTML;
      displayTargetProducts(this.id);
    });
  });

  // Statically create the headings for your table here
  let headings = ["Name", "Description", "Price"];
  let thead = document.querySelector("thead");
  let htr = document.createElement("tr");

  headings.forEach((el) =>
    htr.appendChild(document.createElement("th")).appendChild(document.createTextNode(el))
  );
  thead.appendChild(htr);

  // Dynamically create product rows here
  function displayTargetProducts(currentCategory) {
    let tbody = document.querySelector("#category-products");
    tbody.innerHTML = "";

    let productRows = [];
    productRows = window.products.filter(
      (el) => el.categories.includes(currentCategory) && el.discontinued === false
    );

    productRows.forEach(function (el) {
      let btr = document.createElement("tr");
      btr.appendChild(document.createElement("td")).appendChild(document.createTextNode(el.title));
      btr
        .appendChild(document.createElement("td"))
        .appendChild(document.createTextNode(el.description));
      btr
        .appendChild(document.createElement("td"))
        .appendChild(
          document.createTextNode(
            new Intl.NumberFormat("en-CA", { style: "currency", currency: "CAD" }).format(el.price)
          )
        );
      tbody.appendChild(btr);

      // console.log() the product whenever the user clicks it
      let td = document.querySelectorAll("#category-products td");
      td.forEach(function (el) {
        el.addEventListener("click", function () {
          console.log(el.innerHTML);
        });
      });
    });
  }
});
