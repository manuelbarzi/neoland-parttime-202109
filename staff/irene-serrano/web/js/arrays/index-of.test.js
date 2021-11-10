console.log("--- TEST INDEX-OF ---");

console.log("CASE 1");

var array = ["ant", "bison", "camel", "duck", "bison"];
var index = indexOf(array, "bison");

if (typeof index === "number" && index === 1) console.log("✅");
else console.error("🖕");

console.log("CASE 2");

var array = ["adios", "mundo", "cruel"];
var index = indexOf(array, "cruel");

if (typeof index === "number" && index === 2) console.log("✅");
else console.error("🖕");

console.log("CASE 3");

var array = ["un", "nuevo", "caso"];
var index = indexOf(array, "cruel");

if (typeof index === "number" && index === -1) console.log("✅");
else console.error("🖕");
