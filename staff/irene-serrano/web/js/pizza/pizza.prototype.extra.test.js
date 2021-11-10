describe("TEST EXTRA");

describe("case 1");

var margarita = new Pizza("base", "tomato", "cheese", "basil");
var res = margarita.extra("bacon");


if (
  typeof res === "number" &&
  res === margarita.length &&
  margarita.length === 5 &&
  margarita[0] === "base" &&
  margarita[1] === "tomato" &&
  margarita[2] === "cheese" &&
  margarita[3] === "basil" &&
  margarita[4] === "extra bacon"
)
  success("✅");
else fail("❌");

describe("case 2");

var barbacoa = new Pizza("base", "tomato", "cheese", "beef", "barbaque sauce");
var res = barbacoa.extra("cheese", "bacon");


if (
  typeof res === "number" &&
  res === barbacoa.length &&
  barbacoa.length === 7 &&
  barbacoa[0] === "base" &&
  barbacoa[1] === "tomato" &&
  barbacoa[2] === "cheese" &&
  barbacoa[3] === "beef" &&
  barbacoa[4] === "barbaque sauce" &&
  barbacoa[5] === "extra cheese" &&
  barbacoa[6] === "extra bacon"
)
  success("✅");
else fail("❌");

describe("case 3");

var hawaiiana = new Pizza("base", "tomato", "cheese", "ham");
var res = hawaiiana.extra("pinneaple");

if (
  typeof res === "number" &&
  res === hawaiiana.length &&
  hawaiiana.length === 5 &&
  hawaiiana[0] === "base" &&
  hawaiiana[1] === "tomato" &&
  hawaiiana[2] === "cheese" &&
  hawaiiana[3] === "ham" &&
  hawaiiana[4] === "extra pinneaple" 
)
  success("✅");
else fail("❌");