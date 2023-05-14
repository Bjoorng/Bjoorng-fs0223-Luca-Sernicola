const PRODUCTS_URL = "https://striveschool-api.herokuapp.com/api/product/";
let addressBarContent = new URLSearchParams(window.location.search);
let productID = addressBarContent.get("productId");

const getProduct = function () {
  fetch(PRODUCTS_URL + `${productID}`, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkZmUzZDg4Zjc0MDAwMTQyODc0NWYiLCJpYXQiOjE2ODM4ODE1MzMsImV4cCI6MTY4NTA5MTEzM30.9RRjliXe7i-4JP13GY4bBmZjJh2HeCv51wbCEXipgYo",
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Error getting details");
      }
    })
    .then((product, moreDetails) => {
      console.log(product);
      let colContent = `
      <div class="card col-4 carousel-cont">
      <div id="carouselExample" class="carousel slide" data-bs-ride="true">
        <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="${product.imageUrl}" class=" card-picture" alt="bigger img">
        </div>
        <div class="carousel-item">
            <img src="${product.imageUrl}" class=" card-picture" alt="bigger img">
        </div>
            <div class="carousel-item">
                <img src="${product.imageUrl}" class=" card-picture" alt="bigger img">
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        </div>
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
          <a href="home.html" class="btn buy p-2 mx-1">Get Back</a>
          </div>
        </div>
      </div>
    </div>
    `;
      let colToFill = document.querySelector("#content");
      colToFill.innerHTML = colContent;
    })
    .catch((err) => {
      console.log(err);
    });
};

window.onload = function () {
  getProduct();
};
