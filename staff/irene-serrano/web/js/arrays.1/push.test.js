console.log(" --- TEST PUSH --- ");

console.log("CASE 1");

var array = [5, 12, 130, 8, 44];
var response = push(array, 30);

if (
  typeof response === "number" &&
  response === array.length &&
  array[0] === 5 &&
  array[1] === 12 &&
  array[2] === 130 &&
  array[3] === 8 &&
  array[4] === 44
)
  console.log("✅");
else console.error("🖕");

console.log("CASE 2");

var array = [5, 12, 130, 8, 44];
var response = push(array, 30, 55, 2);

if (
  typeof response === "number" &&
  response === array.length &&
  array[0] === 5 &&
  array[1] === 12 &&
  array[2] === 130 &&
  array[3] === 8 &&
  array[4] === 44 &&
  array[5] === 30 &&
  array[6] === 55 &&
  array[7] === 2
)
  console.log("✅");
else console.error("🖕");

console.log("CASE 3");

var array = ["nuevo", "ELE", "mento"];
var response = push(array, "DESCONOCIDO");

if (
  typeof response === "number" &&
  response === array.length &&
  array[0] === "nuevo" &&
  array[1] === "ELE" &&
  array[2] === "mento" &&
  array[3] === "DESCONOCIDO"
)
  console.log("✅");
else console.error("🖕");
