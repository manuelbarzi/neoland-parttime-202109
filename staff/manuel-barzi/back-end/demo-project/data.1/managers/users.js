const { readFile, writeFile } = require('fs').promises
const path = require('path')
const { validateUser, validateEmail } = require('../helpers/validators')

function read() {
    const file = path.join(__dirname, './users.json')

    return readFile(file, 'utf8')
        .then(json => JSON.parse(json))
}

function write(users) {
    const file = path.join(__dirname, './users.json')
    const json = JSON.stringify(users, null, 4)

    return writeFile(file, json)
}

function save(user) {
    validateUser(user)

    return read()
        .then(users => {
            users.push(user)

            return write(users)
        })
}

function findByEmail(email) {
    validateEmail(email)

    return read()
        .then(users => users.find(user => user.email === email))
}

const users = {
    save,
    findByEmail
}

module.exports = users