const o = { a: 1, b: 2, c: 3, fav: false }

/*
const p = {}

for (const k in o)
    p[k] = o[k]

p.fav = !p.fav
*/

const p = { ...o, fav: !o.fav }

console.log(o)
console.log(p)