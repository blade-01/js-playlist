// Function declaration (hoisting works with this - It works even when the fuction is declared before defining the function)
greet();

function greet() {
  console.log("hello there");
}
// Function Expressiong (hoisting doesn't work with this)
// Defining Function
const speak = function (name, time) {
  console.log(`good ${time} ${name}`);
};

// Declaring Function
speak("mario", "morning");

// Returning values
const calcArea = function (radius) {
  return 3.14 * radius ** 2;
};

console.log(calcArea(5));

// REMARK: It's better to use function expression (i.e define functions first before declaration)

// Arrow Function
// const calcArr = (radius) => {
//   return 3.14 * radius ** 2;
// }; // 01.

const calcArr = (radius) => 3.14 * radius ** 2; // 02.

const area = calcArr(5);
console.log("area is:", area);

const bill = (products, tax) => {
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total += products[i] + products[i] * tax;
  }
  return total;
};

console.log(bill([10, 15, 30], 0.2));

// Functions and Methods
const name = "blade";
const gret = () => "hello";

let resultOne = gret();
console.log(resultOne);

// Methods
let resultTwo = name.toUpperCase();
console.log(resultTwo);

// Callbacks - passing a function inside another function as an argument

const myFunc = (callbackFunc) => {
  // do something
  let value = 50;
  callbackFunc(value);
};

myFunc((value) => {
  // do something
  console.log(value);
});

// foreach

let people = ["mario", "luigi", "ryu", "shaun", "chun-li"];

people.forEach((person) => {
  console.log(person);
});

// Example of callback

const logPerson = (person, index) => {
  console.log(`${index} - hello ${person}`);
};

people.forEach(logPerson);
const ul = document.querySelector(".people");
let html = ``;

people.forEach((person) => {
  // Create html template
  html += `<li>${person}</li>`;
});

console.log(html);

ul.innerHTML = html;

// const todos = [
//   {
//     id: 1,
//     text: "Take out trash",
//     iscompleted: true,
//     array: ["bread", "beans", "garri"],
//   },

//   {
//     id: 2,
//     text: "SIWES at Port Harcourt",
//     iscompleted: false,
//     array: ["quibergine", "dough", "cake"],
//   },
//   {
//     id: 3,
//     text: "Madrasah Exam",
//     iscompleted: true,
//     array: ["rice", "cucumber", "lettuce"],
//   },
// ];
// const ul = document.querySelector(".people");
// let html = ``;
// const tod = todos.forEach((todo) => console.log(todo.array));
// todos.map((todo) => {
//   // Create html template
//   html += `<li>${todo.array}</li>`;
// });
// console.log(html);

// ul.innerHTML = html;
