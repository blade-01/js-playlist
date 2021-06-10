// Object Literals

// Adding method to objects

const person = {
  firstName: "Barry",
  lastName: "Muldano",
  age: 30,
  hobbies: ["music", "movies", "reading"],
  address: {
    street: "50 main st",
    city: "Ikorodu",
    state: "Lagos",
  },
  login: function () {
    console.log("welcome");
  },
  logout: function () {
    console.log("goodbye");
  },
  // Use regular function when "this" keyword is required because arrow function makes use of the global "this"
  logHobbs: function () {
    console.log("this person has the following hobbies:");
    this.hobbies.forEach((hobbs) => {
      console.log(hobbs);
    });
  },
  // OR
  logHobbs() {
    console.log("this person has the following hobbies:");
    this.hobbies.forEach((hobbs) => {
      console.log(hobbs);
    });
  },
};

person.login();
person.logout();
person.logHobbs();

// Maths Object

console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area = 6.7;

console.log(Math.round(area)); // Rounds up or down based on the integer
console.log(Math.floor(area)); // Rounds down
console.log(Math.ceil(area)); // Rounds up
console.log(Math.trunc(area)); // Removes integer

// Random numbers

const random = Math.random();

console.log(random);
console.log(Math.round(random * 100));

// Primitive Values - Value doesn't change

let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`Score One: ${scoreOne}, Score Two: ${scoreTwo}`);

scoreOne = 100;
console.log(`Score One: ${scoreOne}, Score Two: ${scoreTwo}`);

// Reference values - Value changes

let userOne = { name: "blade", age: 23 };
let userTwo = userOne;

console.log(userOne, userTwo);

userOne.age = 40;
console.log(userOne, userTwo);
