const totalPrice = [];
let authorize =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkZmUzZDg4Zjc0MDAwMTQyODc0NWYiLCJpYXQiOjE2ODM4ODE1MzMsImV4cCI6MTY4NTA5MTEzM30.9RRjliXe7i-4JP13GY4bBmZjJh2HeCv51wbCEXipgYo";

const getProducts = function () {
  fetch("https://striveschool-api.herokuapp.com/api/product/", {
    headers: {
      Authorization: authorize,
    },
  })
    .then((res) => {
      console.log("RES", res);
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Errore nel recupero del prodotto!");
      }
    })
    .then((data) => {
      console.log("PRODUCTS IN DB", data);
      data.forEach((product) => {
        let colTemplate = document.createElement("div");
        colTemplate.classList.add("col", "whole-card");
        colTemplate.innerHTML = `
              <div class="card second-cont">
              <img class="card-picture" src="${product.imageUrl}" alt"${product.alt}">
                <div class="card-body">
                  <h5 class="card-title">${product.name}</h5>
                  <p class="card-text mb-0">
                    ${product.description}
                  </p>
                  <div class="card-info d-flex justify-content-between my-2">
                  <p class="card-text">
                    ${product.brand}
                  </p>
                  <p>${product.price}$</p>
                  </div>
                  <div class="buttons">
                  <a href="./backoffice.html?productId=${product._id}" class="btn editBtn d-none">Edit</a>
                  <a href="./findmore.html?productId=${product._id}" class="btn details">Details</a>
                  <a href="#" class="btn buy">Buy</a>
                  </div>
                </div>
              </div>
            </div>
            `;

        let rowReference = document.getElementById("products-container");
        rowReference.appendChild(colTemplate);

        let pageTitle = document.querySelector(".title");
        let game = document.querySelector(".game");
        let cartContainer = document.querySelector("#cart-container");
        let buyButton = colTemplate.querySelectorAll(".buy");
        let editBtn = document.querySelectorAll(".editBtn");
        let editLink = document.querySelector(".edit");

        let cart = document.querySelector("#cart");
        let total = document.querySelector("#total");

        buyButton.forEach((button) => {
          button.addEventListener("click", function (e) {
            e.preventDefault();
            let item = this.closest(".whole-card");
            let listItem = document.createElement("li");
            listItem.classList.add("list-item");
            listItem.innerHTML = `
          <li class="dropdown-item">
          <p class="name mb-0">${product.name}</p>
          <p class="price mb-0">${product.price}$</p>
          <button class="btn btn-danger outOfCart">Remove</button>
          </li>
          `;
            totalPrice.push(product.price);
            localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
            total.textContent =
              "Your Total is:" + totalPrice.reduce(getSum, 0) + "$";

            function getSum(total, num) {
              return total + num;
            }
            cart.appendChild(listItem);
            let outOfCart = cart.querySelectorAll(".outOfCart");
            outOfCart.forEach((button) => {
              button.addEventListener("click", function () {
                let item = this.closest("li");
                item.classList.add("d-none");
                let removedPrice = parseFloat(
                  item.querySelector(".price").textContent
                );
                let removedIndex = totalPrice.indexOf(removedPrice);
                if (removedIndex !== -1) {
                  totalPrice.splice(removedIndex, 1);
                  localStorage.setItem(
                    "totalPrice",
                    JSON.stringify(totalPrice)
                  );
                }
                total.textContent =
                  "Your Total is:" + totalPrice.reduce(getSum, 0) + "$";
              });
            });
          });
        });
        //decommentare per controllare se l'if funziona (funziona giuro);
        //authorize = null;
        editLink.addEventListener("click", function () {
          if (authorize == undefined) {
            alert("YOU SHALL NOT PASS!");
            window.location = "home.html";
          } else {
            pageTitle.innerHTML = "Edit your products HERE!!";
            game.classList.add("d-none");
            cartContainer.classList.add("d-none");
            editBtn.forEach((button) => {
              button.classList.remove("d-none");
              button.classList.add("d-block");
            });
            buyButton.forEach((button) => {
              button.classList.add("d-none");
            });
          }
        });
      });
      console.log(totalPrice);
    })
    .catch((error) => {
      console.log(error);
    });
};

window.onload = () => {
  getProducts();
};
