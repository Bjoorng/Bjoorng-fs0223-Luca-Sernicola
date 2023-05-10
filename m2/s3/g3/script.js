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
    <div class="card text-light border border-light rounded-3">
    <div class="d-flex flex-column bg-dark rounded-3">
    <img src=${book.img} class="img-thumbnail rounded-top-3 rounded-bottom-0" alt="book cover">
    <div class"d-flex flex-column">
    <button class="addToCart btn btn-success rounded-0 w-100">Add to Cart</button>
    <button class="discard btn btn-danger rounded-0 w-100">Discard</button>
    </div>
    </div>
    <div class="card-body d-flex flex-column align-items-center bg-dark p-0 rounded-bottom-3">
    <h5 class="card-title m-2">${book.title}</h5>
    <p class="card-text">${book.price}$</p>
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
          listItem.classList.add("d-flex", "flex-column", "item");
          listItem.innerHTML = `
          <p class="title">${book.title}</p>
          <p class="price">${book.price}$</p>
          <button class="btn btn-danger outOfCart">Remove</button>
          `;
          cart.appendChild(listItem);
          let outOfCart = cart.querySelectorAll(".outOfCart");
          outOfCart.forEach((button) => {
            button.addEventListener("click", function () {
              let item = this.closest(".item");
              item.classList.remove("d-flex");
              item.classList.add("d-none");
              let titles = document.querySelectorAll(".title");
              for (title of titles) {
                if (title.textContent === `${book.title}`) {
                  localStorage.removeItem(`${book.title}`);
                }
              }
            });
          });
          localStorage.setItem(
            `${book.title}`,
            JSON.stringify(`${book.price}`)
          );
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
