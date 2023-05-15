let waitSection = document.querySelector(".wait-section");
let square = document.querySelector(".square");
let triangle = document.querySelector(".triangle");
let triangleSecond = document.querySelector(".triangle-second");
let double = document.querySelector(".double");
let play = document.querySelector(".play");
let decide = document.querySelector(".wait-title");

waitSection.addEventListener("click", function () {
  if (square.classList != "jump") {
    square.classList.add("jump");
    setTimeout(function () {
      square.classList.remove("jump");
    }, 500);
  }
});

let collision = setInterval(function () {
  let squareTop = parseInt(
    window.getComputedStyle(square).getPropertyValue("top")
  );
  let triangleLeft = parseInt(
    window.getComputedStyle(triangle).getPropertyValue("left")
  );
  let triangleSecondLeft = parseInt(
    getComputedStyle(triangleSecond).getPropertyValue("left")
  );
  let doubleLeft = parseInt(getComputedStyle(double).getPropertyValue("left"));
  if (
    (squareTop >= 333 && triangleLeft <= 170 && triangleLeft >= 0) ||
    (squareTop >= 333 &&
      triangleSecondLeft <= 170 &&
      triangleSecondLeft >= 0) ||
    (squareTop >= 333 && doubleLeft <= 170 && doubleLeft >= 0)
  ) {
    double.classList.remove("slider-double");
    triangle.classList.remove("slider");
    alert("HAHA! YOU LOST!!");
    play.classList.remove("hide");
  }
}, 10);

play.addEventListener("click", function () {
  decide.innerHTML = "Good luck friend!";
  square.classList.add("jump");
  play.classList.add("hide");
  triangle.classList.add("slider");
  double.classList.add("slider-double");
});
