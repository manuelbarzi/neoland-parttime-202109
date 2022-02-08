const fs = require('fs').promises

const { readFile, readdir } = fs


readdir('.')
    .then(files => {


        console.log(files)
    })
    .catch(console.log)