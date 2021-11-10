console.log(" --- TEST FIND --- ");
console.log("CASE 1");

function biggerThan(element, index, array, num) {
  if (element > num) {
    return element;
  }
}

var array = [5, 12, 8, 130, 44];
var response = find(array, biggerThan, 10);

if (
  response === 12 &&
  array[0] === 5 &&
  array[1] === 12 &&
  array[2] === 8 &&
  array[3] === 130 &&
  array[4] === 44
)
  console.log("✅");
else console.error("🖕");

console.log("CASE 2");

function biggerThan(element, index, array, num) {
  if (element > num) {
    return element;
  }
}

var array = [5, 12, 8, 130, 44];
var response = find(array, biggerThan, 200);

if (
  response === undefined &&
  array[0] === 5 &&
  array[1] === 12 &&
  array[2] === 8 &&
  array[3] === 130 &&
  array[4] === 44
)
  console.log("✅");
else console.error("🖕");

console.log("CASE 3");

function biggerThan(element, index, array, num) {
  if (element > num) {
    return element;
  }
}

var array = [5, 12, 8, 130, 44];
var response = find(array, biggerThan, -10);

if (
  response === 5 &&
  array[0] === 5 &&
  array[1] === 12 &&
  array[2] === 8 &&
  array[3] === 130 &&
  array[4] === 44
)
  console.log("✅");
else console.error("🖕");

console.log("CASE 4");

function isThere(element, index, array, item) {
  if (element === item) {
    return element;
  }
}

var array = ["banana", "coco", "manzana", "kiwi", "naranja"];
var response = find(array, isThere, "mandarina");

if (
  response === undefined &&
  array[0] === "banana" &&
  array[1] === "coco" &&
  array[2] === "manzana" &&
  array[3] === "kiwi" &&
  array[4] === "naranja"
)
  console.log("✅");
else console.error("🖕");

console.log("CASE 5");

function isThere(element, index, array, item) {
  if (element === item) {
    return element;
  }
}

var array = ["banana", "coco", "manzana", "kiwi", "naranja"];
var response = find(array, isThere, "kiwi");

if (
  response === "kiwi" &&
  array[0] === "banana" &&
  array[1] === "coco" &&
  array[2] === "manzana" &&
  array[3] === "kiwi" &&
  array[4] === "naranja"
)
  console.log("✅");
else console.error("🖕");
