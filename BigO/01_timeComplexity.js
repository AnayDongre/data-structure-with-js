const { performance } = require("perf_hooks");

const apple = ["apple"];
const largeArray = new Array(100000).fill("apple");
function findApple(array) {
  //   let t0 = performance.now();
  for (i = 0; i < array.length; i++) {
    if (array[i] === "apple") {
      console.log("FOUND APPLE");
    }
  }
  //   let t1 = performance.now();
  //   console.log("Time to execute findApple is +" + (t1 - t0) + " milliseconds");
}

findApple(appleime);

// Example 1
function TimeComplexityExample1(input) {
  let a = 10; // O(1)
  a = 50 + 3; // O(1)

  for (let i = 0; i < input.length; i++) {
    //O(n)
    anotherFunction(); //O(n)
    let stranger = true; // O(n)
    a++; //O(n)
  }
  return a; //O(1)
}
// SOLUTION
// O(3 + 4n) --> O(n)

// Example 2
function anotherFunChallenge(input) {
  let a = 5; //O(1)
  let b = 10; //O(1)
  let c = 50; //O(1)
  for (let i = 0; i < input; i++) {
    //O(n)
    let x = i + 1; //O(n)
    let y = i + 2; //O(n)
    let z = i + 3; //O(n)
  }

  for (let j = 0; j < input; j++) {
    //O(n)
    let p = j * 2; //O(n)
    let q = j * 2; //O(n)
  }
  let whoAmI = "I don't know"; // O(1)
}
// SOLUTION
// O(4 + 7n) --> O(n)

// O(n^2)
let arr = ["a", "b", "c", "d"];
function printPair(array) {
  for (i = 0; i < array.length; i++) {
    for (j = 0; j < array.length; j++) {
      console.log(array[i], array[j]);
    }
  }
}
printPair(arr);
