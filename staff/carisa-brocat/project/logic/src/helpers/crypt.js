const bcrypt = require('bcryptjs')

function encryptPassword(password){
    return bcrypt.hash(password, 10)
}

function comparePassword (password, user) {
    const hashedPassword = user.password
    
    return bcrypt.compare(password, hashedPassword) //compara el password encriptado y el q pasa el usuario, devuelve booleano
}


module.exports = {
    comparePassword,
    encryptPassword,
}