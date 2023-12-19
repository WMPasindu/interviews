// ******* QUESTION ********
// This code implements part of our core algorithm for analyzing user spending patterns. 
// While it seems to work functionally, 
// we have concerns about its maintainability, readability, and performance. 
// Can you review this code, identify potential issues, and suggest improvements using best practices of modern ES6

let add = (a, b) => a + b;
let multiply = function (a, b) { return a * b; };

const isEven = num => num % 2 === 0 ?
  true : num % 3 === 0 ?
    "divisible by 3" :
    false;

const calculate = (array) => {
  const array = [];
  for (const item of array) {
    array.push(item * 2);
  }
  return array;
};

const findMax = (arr) => arr.reduce((max, curr) =>
  curr > max ? curr : max, null);

function average(values) {
  const sum = values.reduce((acc, val) => acc + +val, 0);
  return sum / values.length || 0;
}

const user = { name: "John", age: 30 };
const { userName, userAge } = user;

const getData = (url, callback) => {
  fetch(url).then(response => response.json())
    .then(callback);
};

const updateScore = (obj, score) => {
  obj.score = score;
  return obj;
};

const logMessage = text => console.log(() => console.log(text));

async function main() {
  const data = await getData("https://example.com/data");
  const result = calculate(data);
  console.log(result);
}

main();