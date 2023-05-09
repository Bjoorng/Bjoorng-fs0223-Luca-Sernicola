const savedName = localStorage.getItem("name");
if (savedName) {
  document.querySelector("#saved-name").textContent = "Saved: " + savedName;
}

document.querySelector("#save-btn").addEventListener("click", function () {
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
const timer = document.querySelector("#timer");

setInterval(() => {
  count++;
  timer.textContent = `Session time: ${count} secondi`;

  sessionStorage.setItem("count", count);
}, 1000);

//Contatore2

let counter = 0;

if (typeof Storage !== "undefined") {
  if (sessionStorage.counter) {
    counter = parseInt(sessionStorage.counter);
  } else {
    counter = 0;
  }

  setInterval(function () {
    counter++;

    sessionStorage.counter = counter;

    document.querySelector("#counter").innerHTML = counter;
  }, 1000);
} else {
  document.querySelector("#counter").innerHTML =
    "Session storage non supportato dal browser.";
}
