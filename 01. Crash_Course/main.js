// Consoles
console.log("blade is good");
console.error("blade is good");
console.warn("blade is good");

// Variables (var(global scope), let, const (block-level scope))

// Both let and const are block-level scoped

// Use const unless you know you would reassign it, the use let

// Let

let age;

age = 10;

console.log(age);

// const

// const score;

// score = 10;

// console.log(score); // This shows error because it cant be reassigned

// // Data Types (String, Numbers, Boolean, Null, Undifined, Symbol (ES6))

// const string = 'blade';
// const number = 23;
// const decimal = 4.5;
// const boolean = true;
// const null = null; // Ouputs Object but it's bogus
// const undefined = undefined;
// let z; // This equates to undefined

// concatenation
const name = "Blade";

const ojo_ori = "34";

console.log(`My name is ${name}, I am ${ojo_ori}`);

// The length propertym(A property does not have () if it does, then it's a method)

const props = "Blade is strong";

console.log(props.length);

// A method is a functions that's associated with an object

const method = "Blade is strong";

console.log(method.toUpperCase());
console.log(method.substring(0, 5));
console.log(method.substring(0, 5).toUpperCase());
console.log(method.split(" ")); // Space was used to split "Blade is strong" into an array

// Ways to truncate Text
function truncateText(text, limit) {
  const shortened = text.indexOf(" ", limit);
  if (shortened == -1) return text;
  return text.substring(0, shortened);
}

function truncateString(str, num) {
  if (str.length > num) {
    let subStr = str.substring(0, num);
    return subStr + "...";
  } else {
    return str;
  }
}

function truncateString(str, num) {
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + "...";
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

// Arrays - Variables that hold multiple values

// new - This is a constructor
const array = new Array(1, 2, 3, 4, 5);
console.log(array);

const fruits = ["apple", "pineapple", "orange", "grape"];

fruits.push("mangos"); // Adds to the end

fruits.pop(); // Removes from the end

fruits.unshift("strawberries"); // Adds to the beginning

console.log(Array.isArray(fruits)); // check to see if something is an array

console.log(fruits.indexOf("apple")); // check to see the index

console.log(fruits);

// Type conversion
let score = "1000";
let string = 100;

score = Number(score);
string = String(string);
console.log(score, typeof score);
console.log(string, typeof string);

// Object Literals

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
};

console.log(person);
console.log(person.firstName, person.lastName, person.address.street);
console.log(person["address"].city);

console.log(`${person.firstName} ${person.lastName} is ${person.age}`);

console.log(person.hobbies[1]);

person.email = "barrymuld@gmail.com";

console.log(person);

// Destructuring (ES6)

const {
  firstName,
  lastName,
  address: { city },
} = person;

console.log(city);

// Arrays of objects - We get to see/use this a lot

const todos = [
  {
    id: 1,
    text: "Take out trash",
    iscompleted: true,
  },

  {
    id: 2,
    text: "SIWES at Port Harcourt",
    iscompleted: false,
  },
  {
    id: 3,
    text: "Madrasah Exam",
    iscompleted: true,
  },
];

console.log(todos[1].text, todos[2].text);
console.log(todos);

// JSON - JavaScrip Object Notation (Used on the backend to send and receive data - API)

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

// For (let assignment, condition, increment)

for (let i = 0; i < 10; i++) {
  console.log(`For loop number: ${i}`);
}

// While
let i = 0;
while (i < 10) {
  console.log(`While loop number: ${i}`);
  i++;
}

// Looping through array

for (let i = 0; i < todos.length; i++) {
  console.log(todos[i].text);
}

// Better way of looping through array

for (let todo of todos) {
  console.log(todo.iscompleted);
}

// High order array - forEach, map, filter

// Main Function

// forEach
todos.forEach(function (todo) {
  console.log(todo.text);
});

// Map
const todoText = todos.map(function (todo) {
  return todo.text;
});
console.log(todoText);

// Filter
const todoCompleted = todos.filter(function (todo) {
  return todo.iscompleted === true;
});
console.log(todoCompleted);

// Arrow Function
todos.forEach((todo) => {
  console.log(todo.text);
});

// Conditionals
const password = "pass";

if (password.length >= 12 && password.includes("@")) {
  console.log("taht password is mighty strong");
} else if (password.length >= 8 || password.includes("@")) {
  console.log("that password is strong enough");
} else {
  console.log("password is not strong enough");
}

// Ternery Operator (Conditioin, ? - Then, : - Else)

const x = 10;
const color = x > 10 ? "red" : "blue";
console.log(color);

// Switch - This is case and type sensitive
const grade = "A";

switch (grade) {
  case "A":
    console.log(`You got an ${grade}!`);
    break;
  case "B":
    console.log(`You got an ${grade}!`);
    break;
  case "C":
    console.log(`You got an ${grade}!`);
    break;
  case "D":
    console.log(`You got an ${grade}!`);
    break;
  case "E":
    console.log(`You got an ${grade}!`);
    break;
  default:
    console.log(`${grade} is not a valid grade`);
}

// Variables & Block Scope
const odun_ori = 40; // Global/Root Level scope

if (true) {
  const odun_ori = 30;
  const name = "blade";
  console.log("inside 1st code block", odun_ori, name);

  if (true) {
    const odun_ori = 50;
    console.log("inside 2nd code block", odun_ori);
    var test = "blade is awesome"; // var ignores block scope
  }
}

console.log("outside code block", odun_ori, name, test);

// Functions
