console.log('--- TEST LAST-INDEX-OF ---')

console.log("CASE 1");

var index = lastIndexOf('hola mundo', 'o')

if (typeof index === "number" && index === 9) console.log("✅");
else console.error("🖕");

console.log("CASE 2");

var index = lastIndexOf("adios mundo cruel", "u");


if (typeof index === "number" && index === 14) console.log("✅");
else console.error("🖕");

console.log("CASE 3");

var index = lastIndexOf('012345678901234567890123456789', '7');

if (typeof index === "number" && index === 27) console.log("✅");
else console.error("🖕");

console.log("CASE 4");

var index = lastIndexOf('un nuevo caso', 'w');

if (typeof index === "number" && index === -1) console.log("✅");
else console.error("🖕");