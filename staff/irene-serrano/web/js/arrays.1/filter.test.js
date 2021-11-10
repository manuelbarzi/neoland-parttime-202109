console.log(" --- TEST FILTER --- ");



console.log("CASE 1");

function smallerThan(element, index, array, item) {
  if (element < item) {
    return element;
  }
}

var array = [5, 12, 130, 8, 44];
var response = filter(array, smallerThan, 30);

if (
  response[0] === 5 &&
  response[1] === 12 &&
  response[2] === 8 &&
  response.lenght === 3 &&
  array[0] === 5 &&
  array[1] === 12 &&
  array[2] === 130 &&
  array[3] === 8 &&
  array[4] === 44
)
  console.log("✅");
else console.error("🖕");
/* 
console.log("CASE 2");

function isApple(element, index, array, item) {
  if (element === item) {
    return element;
  }
}

var array = [
  "banana",
  "coco",
  "apple",
  "manzana",
  "kiwi",
  "naranja",
  "apple",
  "sandia",
];
var response = filter(array, isApple, "apple");

if (
  response === ["apple", "apple"] &&
  response.length === 2 &&
  array[0] === "banana" &&
  array[1] === "coco" &&
  array[2] === "apple" &&
  array[3] === "manzana" &&
  array[4] === "kiwi" &&
  array[4] === "naranja" &&
  array[4] === "apple" &&
  array[4] === "sandia"
)
  console.log("✅");
else console.error("🖕");
 */