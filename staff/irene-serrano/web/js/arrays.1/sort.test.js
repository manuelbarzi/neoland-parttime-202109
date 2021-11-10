console.log("----- SORT TEST -----");

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
  sorted[1] === 5 &&
  sorted[2] === 40 &&
  sorted[3] === 200 &&
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
  sorted[0] === 200 &&
  sorted[1] === 40 &&
  sorted[2] === 5 &&
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
  sorted[5] === 19 &&
  sorted[6] === 3 &&
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
  sorted[0] === [1, 2, 3] &&
  sorted[1] === [10, true] &&
  sorted[2] === ["a", 4, 5, 6] &&
  sorted.length === array.length
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

console.error("CASE ERROR");
console.info(
  "Hay que tener en cuenta que el método sort, para ordenar números, toma el valor UNICODE de, unicamnte, la primera cifra, por lo que si no pasamos funcion de callback para especificarlo, sort tomará como mayor 4 frente a 30, o 9 frente a 20000. Igualmente, toma ciertos valores como 0 (arrays vacíos o strings vacíos)"
);
console.info("Si creamos el test en base al método sort(), no lo pasará");
var array = [40, 1, 5, 200, "", NaN, undefined, []];
var sorted = sort(array);
console.log(sorted);
console.log([40, 1, 5, 200, "", NaN, undefined, []].sort());
if (
  sorted.length === 8 &&
  sorted[0] === "" &&
  sorted[1] === 1 &&
  sorted[2] === 5 &&
  sorted[3] === 40 &&
  sorted[4] === 200 &&
  sorted[5] === NaN &&
  sorted[6] === undefined &&
  sorted[7] === [] &&
  sorted.length === array.length
)
  console.log("✅");
else console.error("🖕");
