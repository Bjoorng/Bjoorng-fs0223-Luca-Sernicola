const savedName = localStorage.getItem("name");
if (savedName) {
  document.getElementById("saved-name").textContent = "Saved: " + savedName;
}

document.getElementById("save-btn").addEventListener("click", function () {
  const name = document.getElementById("name").value;
  if (name) {
    localStorage.setItem("name", name);
    document.getElementById("saved-name").textContent = "Saved: " + name;
  }
});

document.getElementById("remove-btn").addEventListener("click", function () {
  localStorage.removeItem("name");
  document.getElementById("name").value = "";
  document.getElementById("saved-name").textContent = "";
});

let count = sessionStorage.getItem("count") || 0;
const timer = document.getElementById("timer");

setInterval(() => {
  count++;
  timer.textContent = `Session time: ${count} secondi`;

  sessionStorage.setItem("count", count);
}, 1000);

//Contatore2

if (typeof Storage !== "undefined") {
  if (sessionStorage.counter) {
    var counter = parseInt(sessionStorage.counter);
  } else {
    var counter = 0;
  }

  setInterval(function () {
    counter++;

    sessionStorage.counter = counter;

    document.getElementById("counter").innerHTML = counter;
  }, 1000);
} else {
  document.getElementById("counter").innerHTML =
    "Session storage non supportato dal browser.";
}
