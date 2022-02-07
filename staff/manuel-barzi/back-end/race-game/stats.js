const fs = require('fs').promises

const { readFile, readdir } = fs

// TODO read all txt race files (TIP use readFile)
// TODO extract results (wining number per car - win ratio, tie times and cars involved)

readdir('.')
    .then(files => {
        // TODO filter txt files only
        // TODO read all files (Promise.all?) and reduce stats (TIP may reduce array's method work here)
        console.log(files)
    })
    .catch(console.error)