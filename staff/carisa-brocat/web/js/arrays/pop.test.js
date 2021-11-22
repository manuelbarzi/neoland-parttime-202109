console.log('TEST POP')

var plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

var res = pop(plants)

if( typeof res === 'string'
&& res ==='tomato'
&& plants.length === 4
&& plants[0]==='broccoli'
&& plants[1]==='cauliflower'
&& plants[2]==='cabbage'
&& plants[3]==='kale'
)console.log("TEst OK")
else
console.log("Test KO")