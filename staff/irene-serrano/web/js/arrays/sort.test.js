console.log("--- SORT TEST ---");

console.log("CASE 1");

var array = ["a", "b", "Z", "Aa", "AA"];
var sorted = sort(array);

if (
  sorted instanceof Array &&
  sorted.length === 5 &&
  sorted[0] === "AA" &&
  sorted[1] === "Aa" &&
  sorted[2] === "Z" &&
  sorted[3] === "a" &&
  sorted[4] === "b" &&
  sorted.length === array.length
)
  console.log("✅");
else console.error("🖕");

console.log("CASE 2");

var array = [40, 1, 5, 200];
var sorted = sort(array);

if (
  sorted instanceof Array &&
  sorted.length === 4 &&
  sorted[0] === 1 &&
  sorted[1] === 200 &&
  sorted[2] === 40 &&
  sorted[3] === 5 &&
  sorted.length === array.length
)
  console.log("✅");
else console.error("🖕"); 

console.log("CASE 3");

var array = [40, 1, 5, 200];
var sorted = sort(array, -1);

if (
  sorted instanceof Array &&
  sorted.length === 4 &&
  sorted[0] === 5 &&
  sorted[1] === 40 &&
  sorted[2] === 200 &&
  sorted[3] === 1 &&
  sorted.length === array.length
)
  console.log("✅");
else console.error("🖕");

console.log("CASE 4");

var array = ["A", "z", "Dd", "dD"];
var sorted = sort(array, -1);
if (
  sorted instanceof Array &&
  sorted.length === 4 &&
  sorted[0] === "z" &&
  sorted[1] === "dD" &&
  sorted[2] === "Dd" &&
  sorted[3] === "A" &&
  sorted.length === array.length
)
  console.log("✅");
else console.error("🖕");

console.log("CASE 5");

var array = ["A", "z", "Dd", "dD", 3, 19, 98];
var sorted = sort(array, -1);
if (
  sorted instanceof Array &&
  sorted.length === 7 &&
  sorted[0] === "z" &&
  sorted[1] === "dD" &&
  sorted[2] === "Dd" &&
  sorted[3] === "A" &&
  sorted[4] === 98 &&
  sorted[5] === 3 &&
  sorted[6] === 19 &&
  sorted.length === array.length
)
  console.log("✅");
else console.error("🖕");

console.log("CASE 6");

var array = [
  [1, 2, 3],
  ["a", 4, 5, 6],
  [10, true]
];
var sorted = sort(array);

if (
  sorted instanceof Array &&
  sorted.length === 3 &&
  sorted[0][0] === 1 &&
  sorted[0][1] === 2 &&
  sorted[0][2] === 3 &&
  sorted[1][0] === 10 &&
  sorted[1][1] === true &&
  sorted[2][0] === "a" &&
  sorted[2][1] === 4 &&
  sorted[2][2] ===  5 &&
  sorted[2][3] ===  6 &&
  array.length === 3
)
  console.log("✅");
else console.error("🖕");

console.log("CASE 7");

var array = [undefined, null, null, undefined, false, 0];
var sorted = sort(array);

if (
  sorted instanceof Array &&
  sorted.length === 6 &&
  sorted[0] === 0 && 
  sorted[1] === false &&
  sorted[2] === null &&
  sorted[3] === null &&
  sorted[4] === undefined &&
  sorted[5] === undefined &&
  sorted.length === array.length
)
  console.log("✅");
else console.error("🖕");