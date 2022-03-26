var numbersArr = [12, -43, 65, -76, -5, 1, -4, 67];

function countNumber(numbers, what) {
  var count = 0;

  if (what === "odd") {
    for (let i = 0; i < numbers.length; i++) {
      let currentNum = numbers[i];

      if ((currentNum % 2 === 1) | (currentNum % 2 === -1)) {
        count++;
      }
    }
  } else if (what === "even") {
    for (let i = 0; i < numbers.length; i++) {
      let currentNum = numbers[i];

      if (currentNum % 2 === 0) {
        count++;
      }
    }
  } else if (what === "negative") {
    for (let i = 0; i < numbers.length; i++) {
      let currentNum = numbers[i];

      if (currentNum < 0) {
        count++;
      }
    }
  }else if (what === "positive") {
    for (let i = 0; i < numbers.length; i++) {
      let currentNum = numbers[i];

      if (currentNum >= 0) {
        count++;
      }
    }
  }else if (what === undefined) {
    count = numbers.lenght;
  }

  return count
  
}

var all = countNumber([9, -8, -7, 6, -5, 4, 3, 2, 1, 13],);
console.log(all) //10
var negatives = countNumber([9, -8, -7, 6, -5, 4, 3, 2, 1, 13], "negative");
console.log(negatives) //3
var positives = countNumber([9, -8, -7, 6, -5, 4, 3, 2, 1, 13], "positive");
console.log(positives) // 7
var even = countNumber([9, -8, -7, 6, -5, 4, 3, 2, 1, 13], "even");
console.log(even) //4
var odd = countNumber([9, -8, -7, 6, -5, 4, 3, 2, 1, 13], "odd");
console.log(odd) //6