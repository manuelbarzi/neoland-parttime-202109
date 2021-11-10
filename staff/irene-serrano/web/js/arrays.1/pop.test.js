console.log(" --- TEST POP --- ");

console.log("CASE 1");

var array = [5, 12, 130, 8, 44];
var response = pop(array);

if (
    typeof response === 'number' &&
    response === 44 &&
    array.length === 4 &&
    array[0] === 5 &&
    array[1] === 12 &&
    array[2] === 130 &&
    array[3] === 8 
)
  console.log("✅");
else console.error("🖕");

console.log("CASE 2");

var array = [5, 12, 130, 8, 44, 'cascada'];
var response = pop(array);

if (
    typeof response === 'string' &&
    response === 'cascada' &&
    array.length === 5 &&
    array[0] === 5 &&
    array[1] === 12 &&
    array[2] === 130 &&
    array[3] === 8 &&
    array[4] === 44
)
  console.log("✅");
else console.error("🖕");

console.log("CASE 3");

var array = ['pop'];
var response = pop(array);

if (
    typeof response === 'string' &&
    response === 'pop' &&
    array.length === 0
)
  console.log("✅");
else console.error("🖕");