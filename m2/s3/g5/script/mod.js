const PRODUCT_URL = "https://striveschool-api.herokuapp.com/api/product/";
let addressBarContent = new URLSearchParams(window.location.search);

let productId = addressBarContent.get("productId");

console.log("PRODUCTID", productId);

if (productId) {
  document.getElementsByTagName("h2")[0].innerText = "Backoffice page - Edit";

  document.getElementById("save-button").innerText = "Edit Product";

  let deleteBut = document.querySelector("#deleteButton");
  let deleteButton = document.getElementById("delete-button");
  deleteButton.classList.remove("d-none");
  deleteBut.addEventListener("click", () => {
    fetch(PRODUCT_URL + "/" + productId, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkZmUzZDg4Zjc0MDAwMTQyODc0NWYiLCJpYXQiOjE2ODM4ODE1MzMsImV4cCI6MTY4NTA5MTEzM30.9RRjliXe7i-4JP13GY4bBmZjJh2HeCv51wbCEXipgYo",
        "Content-Type": "application/json",
      },
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          location.assign("./home.html");
        } else {
          throw new Error("Can't delete product");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });

  fetch(PRODUCT_URL + "/" + productId, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkZmUzZDg4Zjc0MDAwMTQyODc0NWYiLCJpYXQiOjE2ODM4ODE1MzMsImV4cCI6MTY4NTA5MTEzM30.9RRjliXe7i-4JP13GY4bBmZjJh2HeCv51wbCEXipgYo",
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Couldn't retrieve product data");
      }
    })
    .then((product) => {
      console.log("Product data", product);
      document.querySelector("#name").value = product.name;
      document.querySelector("#description").value = product.description;
      document.querySelector("#brand").value = product.brand;
      document.querySelector("#price").value = product.price;
      document.querySelector("#imageUrl").value = product.imageUrl;
      document.querySelector("#more-text").value = product.moreText;
      document.querySelector("#imageUrl2").value = product.imageUrl2;
      document.querySelector("#imageUrl3").value = product.imageUrl3;
      document.querySelector("#imageUrl4").value = product.imageUrl4;
    })
    .catch((error) => {
      console.log(error);
    });
} else {
}

const productForm = document.querySelector("#product-form");
productForm.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("Sending data");

  let nameInput = document.querySelector("#name");
  let descriptionInput = document.querySelector("#description");
  let brandInput = document.querySelector("#brand");
  let priceInput = document.querySelector("#price");
  let imageUrlInput = document.querySelector("#imageUrl");

  let newProduct = {
    name: nameInput.value,
    description: descriptionInput.value,
    brand: brandInput.value,
    price: priceInput.value,
    imageUrl: imageUrlInput.value,
  };

  console.log("Product Ready", newProduct);

  fetch(productId ? PRODUCT_URL + "/" + productId : PRODUCT_URL, {
    method: productId ? "PUT" : "POST",
    body: JSON.stringify(newProduct),
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkZmUzZDg4Zjc0MDAwMTQyODc0NWYiLCJpYXQiOjE2ODM4ODE1MzMsImV4cCI6MTY4NTA5MTEzM30.9RRjliXe7i-4JP13GY4bBmZjJh2HeCv51wbCEXipgYo",
      "content-type": "application/json",
    },
  })
    .then((res) => {
      console.log("RESPONSE", res);
      if (res.ok) {
        alert(
          productId
            ? "Your Product Has Been Modified!"
            : "Congrats! Your Product Has Been Added!"
        );
        location.assign("./home.html");
      } else {
        alert("ERROR");
        throw new Error("ERROR");
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

let resetButton = document.querySelector("#reset-button");
resetButton.addEventListener("click", (e) => {
  e.preventDefault();
  productForm.reset();
});
