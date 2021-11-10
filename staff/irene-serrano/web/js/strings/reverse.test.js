console.log('--- TEST REVERSE ---')

console.log("CASE 1");

var reverted = reverse('hola mundo')

if (typeof reverted === "string" && 
reverted === 'odnum aloh') console.log("✅");
else console.error("🖕");



console.log("CASE 2");

var reverted = reverse('0123456789')

if (typeof reverted === "string" && 
reverted === '9876543210' ) console.log("✅");
else console.error("🖕");
