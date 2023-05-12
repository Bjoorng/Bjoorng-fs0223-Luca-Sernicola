const getProducts = function () {
  fetch("https://striveschool-api.herokuapp.com/api/product/", {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkZmUzZDg4Zjc0MDAwMTQyODc0NWYiLCJpYXQiOjE2ODM4ODE1MzMsImV4cCI6MTY4NTA5MTEzM30.9RRjliXe7i-4JP13GY4bBmZjJh2HeCv51wbCEXipgYo",
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
        let colTemplate = `
            <div class="col col-md-2 p-5">
              <div class="card rounded-5">
              <img class="h-100 w-100 rounded-top-5" src="${product.imageUrl}" alt"${product.alt}">
                <div class="card-body">
                  <h5 class="card-title">${product.name}</h5>
                  <p class="card-text mb-0">
                    ${product.description}
                  </p>
                  <p class="card-text">
                    ${product.brand}
                  </p>
                  <p>${product.price}</p>
                  <div class="d-flex justify-content-around">
                  <a href="./backoffice.html?productId=${product._id}" class="btn btn-primary w-100 p-2 mx-1">Edit</a>
                  <a href="./findmore.html?productId=${product._id}" class="btn btn-primary w-100 p-2 mx-1">Details</a>
                  </div>
                </div>
              </div>
            </div>
            `;

        let rowReference = document.getElementById("products-container");
        rowReference.innerHTML += colTemplate;
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

window.onload = () => {
  getProducts();
};
