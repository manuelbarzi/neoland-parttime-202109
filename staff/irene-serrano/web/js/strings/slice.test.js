console.log("--- TEST SLICE ---");

console.log("CASE 1");

var sliced = slice('Quiero 3 manzanas', -8);

if (typeof sliced === "string" && sliced === 'manzanas') console.log("✅");
else console.error("🖕");

console.log("CASE 2");

var sliced = slice('En un lugar de La Mancha, de cuyo nombre no quiero acordarme', 15, 24);

if (typeof sliced === "string" && sliced === 'La Mancha') console.log("✅");
else console.error("🖕");

