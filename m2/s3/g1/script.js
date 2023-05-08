/* ESERCIZIO 1 */

class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }
  static ageDiff(a, b) {
    if (a.age > b.age) {
      return a.firstName + " is older than " + b.firstName;
    } else {
      return b.firstName + " is older than " + a.firstName;
    }
  }
}

let x = new User("Mario", "Rossi", 38, "Tivoli");
let y = new User("Carlo", "Verdi", 89, "Ostia");

console.log(User.ageDiff(x, y));

/* ESERCIZIO 2 */

let petName = document.querySelector("#petName");
let ownerName = document.querySelector("#owner");
let species = document.querySelector("#species");
let breedType = document.querySelector("#breed");

const pets = [];

class Pet {
  constructor(petName, owner, species, breed) {
    this.petName = petName;
    this.owner = owner;
    this.species = species;
    this.breedType = breed;
  }
  static compareNames = function (pet1, pet2) {
    return pet1.owner === pet2.owner;
  };
}

let formReference = document.querySelector(".form");
formReference.addEventListener("submit", (e) => {
  e.preventDefault();
  let pet = new Pet(
    petName.value,
    ownerName.value,
    species.value,
    breedType.value
  );
  const usersList = function () {
    let list = document.querySelector("#petList");
    list.innerHTML = "";
    pets.forEach((pet, i) => {
      let newList = document.createElement("li");
      newList.innerText =
        pet.petName + " " + pet.owner + " " + pet.species + " " + pet.breedType;
      list.appendChild(newList);
    });
  };
  pets.push(pet);
  usersList();
  formReference.reset();
});

console.log(pets);
