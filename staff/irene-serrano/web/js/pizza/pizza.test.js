describe("TEST PIZZA w/ methods");

describe("case 1");

var margarita = new Pizza("base", "tomato", "cheese", "basil");
var res1 = margarita.glutenFree('no')
var res2 = margarita.extra('ham')
margarita.resume()
margarita.price()
margarita.wait()

if (
  margarita.gluten === true &&
  margarita.ingredients.length === 4 &&
  margarita.ingredients[0] === "base" &&
  margarita.ingredients[1] === "tomato" &&
  margarita.ingredients[2] === "cheese" &&
  margarita.ingredients[3] === "basil" &&
  margarita.extras[0] === 'ham' &&
  margarita.extras.length === 1 &&
  margarita.price === 6
)
  success("✅");
else fail("❌");


describe("case 2");

var barbacoa = new Pizza("base", "tomato", "cheese", "beef", "barbaque sauce");
var res1 = barbacoa.glutenFree("yes");
var res2 = barbacoa.extra("cheese", "bacon");

barbacoa.resume()
barbacoa.price()
barbacoa.wait()

if (
  typeof res1 === "boolean" &&
  res1 === false &&
  barbacoa.gluten === false &&
  barbacoa.ingredients.length === 5 &&
  barbacoa.ingredients[0] === "base" &&
  barbacoa.ingredients[1] === "tomato" &&
  barbacoa.ingredients[2] === "cheese" &&
  barbacoa.ingredients[3] === "beef" &&
  barbacoa.ingredients[4] === "barbaque sauce" &&
  barbacoa.extras[0] === "cheese" &&
  barbacoa.extras[1] === "bacon" &&
  barbacoa.extras.length === 2 &&
  barbacoa.price === 9
)
  success("✅");
else fail("❌");

describe("case 3");

var hawaiiana = new Pizza("base", "tomato", "cheese", "ham");
var res1 = hawaiiana.glutenFree("no");
var res2 = hawaiiana.extra("pinneaple", "cheese");

hawaiiana.resume()
hawaiiana.price()
hawaiiana.wait()

if (
  typeof res1 === "boolean" &&
  res1 === true &&
  hawaiiana.gluten === true &&
  hawaiiana.ingredients.length === 4 &&
  hawaiiana.ingredients[0] === "base" &&
  hawaiiana.ingredients[1] === "tomato" &&
  hawaiiana.ingredients[2] === "cheese" &&
  hawaiiana.ingredients[3] === "ham" &&
  hawaiiana.extras[0] === "pinneaple" &&
  hawaiiana.extras[1] === "cheese" &&
  hawaiiana.extras.length === 2 &&
  hawaiiana.price === 8
)
  success("✅");
else fail("❌");