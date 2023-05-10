fetch("https://striveschool-api.herokuapp.com/books")
  .then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return new Error("Couldn't contact server");
    }
  })
  .then((books) => {
    const bookList = document.querySelector("#bookList");

    books.forEach((book) => {
      const bookItem = document.createElement("div");
      bookItem.classList.add("wholeCard", "col-3", "d-flex", "mb-3");
      bookItem.innerHTML = `
    <div class="card text-light border border-light rounded-3" style="width: 18rem;">
    <img src=${book.img} class="img-thumbnail img-fluid rounded-top-3" alt="book cover">
    <div class="card-body bg-dark p-0 rounded-bottom-3">
    <h5 class="card-title">${book.title}</h5>
    <p class="card-text">${book.price}</p>
    <div class"d-flex justify-content-center">
    <button class="addToCart btn btn-success w-50">Add to Cart</button>
    <button class="discard btn btn-danger w-50">Discard</button>
    </div>
    </div>
    </div>
    `;
      bookList.appendChild(bookItem);

      let cart = document.querySelector(".cart");
      let addBut = bookItem.querySelectorAll(".addToCart");
      addBut.forEach((button) => {
        button.addEventListener("click", function () {
          let card = this.closest(".card");
          let listItem = document.createElement("li");
          listItem.classList.add("d-flex", "flex-column");
          listItem.innerHTML = `
          <p class="title">${book.title}</p>
          <p class="price">${book.price}</p>
          <button class="btn btn-danger">Remove</button>
          `;

          cart.appendChild(listItem);
        });
      });

      let discardBut = bookItem.querySelectorAll(".discard");
      discardBut.forEach((button) => {
        button.addEventListener("click", function () {
          let card = this.closest(".card");
          card.classList.remove("d-flex");
          card.classList.add("d-none");
        });
      });
    });
  })

  .catch((error) => {
    console.error(error);
  });
