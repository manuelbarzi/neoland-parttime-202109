/**
 * Copies file from one location into another
 * 
 * Example
 * $ node cp hello.txt hello.1.txt
 */

const { readFile, writeFile, } = require('fs')

const { argv: [, , origin, destiny], memoryUsage } = process

console.log('before readFile', memoryUsage())

readFile(origin, (error, content) => {
    if (error)
        return console.error(error)
    
    console.log('after readFile', memoryUsage())

    writeFile(destiny, content, error => {
        if (error)
            console.error(error)
    })
})