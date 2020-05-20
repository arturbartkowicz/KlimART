const name = "Artur";
const surname = "Bartkowicz";
const age = 29;

console.log(`Mam na imę ${name + " " + surname} i mam ${age} lat.`);

const empty = document.querySelector('.innerHTML');
empty.innerHTML = 'Uźycie innerHTML na potrzeby modyfikacji DOM, praktyczne uźycie JS modyfikujązego DOM';
empty.style.color = 'blue';
//------------------------------------
const humanOne = {
  name: 'Maciek',
  age: 21
}

const humanTwo = {
  name: 'Artur',
  age: 28
}

humanTwo.age = 32;

console.log(humanTwo); //{name: "Artur", age: 32}
//dlaczego nam podmieniło wiek? Bo cały obiekt jest const, a nie jego własności
// dlatego 'połączenie' się zmieniło.

//---------------------------------------

const humanThree = {
  name: 'Rafał',
  age: 28
}

const humanFour = humanThree;
humanThree.age = 24;

console.log(humanThree); //age 24
console.log(humanFour);  //age 24 

//---------------------------------------

const humanFive = {
  name: 'Rafał',
  age: 45
}

const humanSix = {
  name: 'Rafał',
  age: humanFive.age
}

console.log(humanFive); //age 45
console.log(humanSix);  //age 45 

humanFive.age = 23;

console.log(humanFive); //age 23
console.log(humanSix);  //age 45 

//---------------------------------------

const humanSeven = {
  name: 'Rafał',
  age: 45,
  address: {
    street: 'Warszawska',
    city: 'Białystok'
  }
}

const humanEight = {
  name: 'Rafał',
  age: humanSeven.age,
  address: humanSeven.address
}

humanSeven.address.street = 'Lipowa';
humanSeven.age = 67;

console.log(humanSeven); // age 67,  street: Lipowa
console.log(humanEight); // age 45,  street: Lipowa
