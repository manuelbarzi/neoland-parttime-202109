/**
 * Copies file from one location into another
 * 
 * Example
 * $ node cp hello.txt hello.1.txt
 */

const { createReadStream, createWriteStream, } = require('fs')

const { argv: [, , origin, destiny], memoryUsage } = process

console.log('before readFile', memoryUsage())

const rs = createReadStream(origin)
const ws = createWriteStream(destiny)

// rs.on('data', chunk => ws.write(chunk))
rs.pipe(ws)

rs.on('close', () => console.log('after readFile', memoryUsage()))