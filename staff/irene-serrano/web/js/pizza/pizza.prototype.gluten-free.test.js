describe("TEST EXTRA");

describe("case 1");

var margarita = new Pizza("base", "tomato", "cheese", "basil");
var res = margarita.glutenFree();


if (
  typeof res === "boolean" &&
  margarita.gluten === true &&
  margarita.ingredients.length === 4 &&
  margarita.ingredients[0] === "base" &&
  margarita.ingredients[1] === "tomato" &&
  margarita.ingredients[2] === "cheese" &&
  margarita.ingredients[3] === "basil" 

)
  success("✅");
else fail("❌");


describe("case 2");

var margarita = new Pizza("base", "tomato", "cheese", "basil");
var res = margarita.glutenFree("yes");


if (
    typeof res === "boolean" &&
    margarita.gluten === false &&
    margarita.ingredients.length === 4 &&
    margarita.ingredients[0] === "base" &&
    margarita.ingredients[1] === "tomato" &&
    margarita.ingredients[2] === "cheese" &&
    margarita.ingredients[3] === "basil" 

)
  success("✅");
else fail("❌");

describe("case 3");

var margarita = new Pizza("base", "tomato", "cheese", "basil");
var res = margarita.glutenFree("Yes");


if (
    typeof res === "boolean" &&
    margarita.gluten === false &&
    margarita.ingredients.length === 4 &&
    margarita.ingredients[0] === "base" &&
    margarita.ingredients[1] === "tomato" &&
    margarita.ingredients[2] === "cheese" &&
    margarita.ingredients[3] === "basil" 

)
  success("✅");
else fail("❌");

describe("case 4");

var margarita = new Pizza("base", "tomato", "cheese", "basil");
var res = margarita.glutenFree("s");


if (
    typeof res === "boolean" &&
    margarita.gluten === true &&
    margarita.ingredients.length === 4 &&
    margarita.ingredients[0] === "base" &&
    margarita.ingredients[1] === "tomato" &&
    margarita.ingredients[2] === "cheese" &&
    margarita.ingredients[3] === "basil" 

)
  success("✅");
else fail("❌");

describe("case 5");

var margarita = new Pizza("base", "tomato", "cheese", "basil");
var res = margarita.glutenFree("no");


if (
    typeof res === "boolean" &&
    margarita.gluten === true &&
    margarita.ingredients.length === 4 &&
    margarita.ingredients[0] === "base" &&
    margarita.ingredients[1] === "tomato" &&
    margarita.ingredients[2] === "cheese" &&
    margarita.ingredients[3] === "basil" 

)
  success("✅");
else fail("❌");