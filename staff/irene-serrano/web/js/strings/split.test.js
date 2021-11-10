console.log("--- TEST SPLIT ---");

console.log("CASE 1");

var str = "hola que tal como estas?";
var splited = split(str, " ");

if (
  splited instanceof Array &&
  splited.length === 5 &&
  splited[0] === "hola" &&
  splited[1] === "que" &&
  splited[2] === "tal" &&
  splited[3] === "como" &&
  splited[4] === "estas?" &&
  str === "hola que tal como estas?"
)
  console.log("✅");
else console.error("🖕");

console.log("CASE 2");

var str = "se.me.rompio.la.barra.espaciadora.";
var splited = split(str, ".");

if (
  splited instanceof Array &&
  splited.length === 6 &&
  splited[0] === "se" &&
  splited[1] === "me" &&
  splited[2] === "rompio" &&
  splited[3] === "la" &&
  splited[4] === "barra" &&
  splited[5] === "espaciadora" &&
  str === "se.me.rompio.la.barra.espaciadora."
)
  console.log("✅");
else console.error("🖕");
