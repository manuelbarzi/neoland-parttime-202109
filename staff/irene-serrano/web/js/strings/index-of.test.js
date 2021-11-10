console.log("--- TEST INDEX-OF ---");

console.log("CASE 1");

var index = indexOf("hola mundo", "m");

if (typeof index === "number" && index === 5) console.log("✅");
else console.error("🖕");

console.log("CASE 2");

var index = indexOf("adios mundo cruel", "c");

if (typeof index === "number" && index === 12) console.log("✅");
else console.error("🖕");

console.log("CASE 3");

var index = indexOf("un nuevo caso", "w");

if (typeof index === "number" && index === -1) console.log("✅");
else console.error("🖕");
