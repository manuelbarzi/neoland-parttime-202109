const { readFile, writeFile } = require('fs').promises
const path = require('path')
const { validateUser, validateEmail } = require('./helpers/validators')

function read() {
    return readFile(path.join(__dirname, '../jsons/users.json'), 'utf8')
        .then(json => JSON.parse(json))
}

function write(users) {
    const json = JSON.stringify(users, null, 4)

    return writeFile(path.join(__dirname, '../jsons/users.json'), json)
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

module.exports = {
    save,
    findByEmail
}