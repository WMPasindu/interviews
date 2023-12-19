// 1. Using arrow functions inconsistently for no reason
let add = (a, b) => a + b;
let multiply = function (a, b) { return a * b; };

// 2. Nested ternary operators for simple logic
const isEven = num => num % 2 === 0 ?
  true : num % 3 === 0 ?
    "divisible by 3" :
    false;

// 3. Shadowing variables from outer scope with const
const calculate = (array) => {
  const array = []; // Shadowing original array variable with an empty one!
  for (const item of array) { // Iterating over empty array!
    array.push(item * 2); // Pushing to same empty array!
  }
  return array; // Empty array as a result!
};

// 4. Arrow function with implicit return for complex logic
const findMax = (arr) => arr.reduce((max, curr) =>
  curr > max ? curr : max, null); // Doesn't handle empty array!

// 5. Magic numbers and implicit type coercion
function average(values) {
  const sum = values.reduce((acc, val) => acc + +val, 0); // Converting strings to numbers with +
  return sum / values.length || 0; // Empty array check or zero?
}

// 6. Overly complex object destructuring for simple access
const user = { name: "John", age: 30 };
const { userName, userAge } = user; // Renamed and unnecessary destructuring!

// 7. Callback functions without proper error handling
const getData = (url, callback) => {
  fetch(url).then(response => response.json())
    .then(callback) // No error handling for fetch or parsing!
};

// 8. Mutating objects directly instead of using spread or immutable patterns
const updateScore = (obj, score) => {
  obj.score = score; // Directly modifies original object!
  return obj;
};

// 9. Unnecessary arrow function wrapping and nesting
const logMessage = text => console.log(() => console.log(text)); // Nested and pointless!

// 10. Mixing synchronous and asynchronous code without proper control flow
async function main() {
  const data = await getData("https://example.com/data");
  const result = calculate(data);
  console.log(result);
  // No wait for async data before logging!
}

main();