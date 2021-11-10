console.log("--- TEST LAST-INDEX-OF ---");

console.log("CASE 1");

var array = ["ant", "bison", "camel", "duck", "camel", "bison"];
var index = lastIndexOf(array, "camel");

if (
  typeof index === "number" &&
  index === 4 &&
  array.length === 6 &&
  array[0] === "ant" &&
  array[1] === "bison" &&
  array[2] === "camel" &&
  array[3] === "duck" &&
  array[4] === "camel" &&
  array[5] === "bison"
)
  console.log("✅");
else console.error("🖕");

console.log("CASE 2");

var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var index = lastIndexOf(array, 3);

if (
  typeof index === "number" &&
  index === 13 &&
  array.length === 20 &&
  array[0] === 0 &&
  array[1] === 1 &&
  array[2] === 2 &&
  array[3] === 3 &&
  array[4] === 4 &&
  array[5] === 5 &&
  array[6] === 6 &&
  array[7] === 7 &&
  array[8] === 8 &&
  array[9] === 9 &&
  array[10] === 0 &&
  array[11] === 1 &&
  array[12] === 2 &&
  array[13] === 3 &&
  array[14] === 4 &&
  array[15] === 5 &&
  array[16] === 6 &&
  array[17] === 7 &&
  array[18] === 8 &&
  array[19] === 9
)
  console.log("✅");
else console.error("🖕");

console.log("CASE 3");

var array = ["un", "nuevo", "caso"];
var index = lastIndexOf(array, "cruel");

if (
  typeof index === "number" &&
  index === -1 &&
  array.length === 3 &&
  array[0] === "un" &&
  array[1] === "nuevo" &&
  array[2] === "caso"
)
  console.log("✅");
else console.error("🖕");
