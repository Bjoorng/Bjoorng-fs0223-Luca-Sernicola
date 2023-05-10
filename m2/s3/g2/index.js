const savedName = localStorage.getItem("name");
if (savedName) {
  document.querySelector("#saved-name").textContent = "Saved: " + savedName;
}

document.querySelector("#save-btn").addEventListener("click", function (e) {
  const name = document.getElementById("name").value;
  if (name) {
    localStorage.setItem("name", name);
    document.querySelector("#saved-name").textContent = "Saved: " + name;
  }
});

document.querySelector("#remove-btn").addEventListener("click", function () {
  localStorage.removeItem("name");
  document.querySelector("#name").value = "";
  document.querySelector("#saved-name").textContent = "";
});

let count = sessionStorage.getItem("count") || 0;
let timer = document.querySelector("#timer");
let seconds = 0;
let counter = document.querySelector("#counter");

setInterval(() => {
  count++;
  timer.textContent = `Session time: ${count} seconds`;

  sessionStorage.setItem("count", count);
}, 1000);

setInterval(() => {
  seconds++;
  counter.textContent = `${seconds}`;
}, 1000);
