describe("TEST search")

// ______________________________________________________________________________


text = 'hola que tal estas'
res = search(text,'que')

if(typeof res === 'number'
&& res === 5) success('test 1 ok')
else fail('test 1 failed')

// ______________________________________________________________________________


text = 'hola que tal estas'
res = search(text,'adios')

if(typeof res === 'number'
&& res === -1) success('test 2 ok')
else fail('test 2 failed')

// ______________________________________________________________________________


text = 'hola que tal estas'
res = search(text,'tale')

if(typeof res === 'number'
&& res === -1) success('test 3 ok')
else fail('test 3 failed')

// ______________________________________________________________________________


text = 'hola que tal estas'
res = search(text,'a')

if(typeof res === 'number'
&& res === 3) success('test 4 ok')
else fail('test 4 failed')