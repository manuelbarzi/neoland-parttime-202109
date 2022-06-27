const { models: { User}} =require('data')
const { validators: {validateId, validatePassword}, errors: {NotFoundError, AuthError}} =require('commons')
const bcrypt = require('bcryptjs')


function deleteNutritionist(nutritionistId, password){
    validateId(nutritionistId, 'nutritionist id')
    validatePassword(password)

    return User.findById(nutritionistId)
        .then(nutritionist => {
            if(!nutritionist) throw new NotFoundError(`nutritionist with id ${nutritionistId} not found`)

             //si el pswd no está encriptado: if (user.password !== password) throw new AuthError('wrong credentials')
        return bcrypt.compare(password, nutritionist.password)
        })
        .then(match => {
            if(!match) throw new AuthError('wrong crdentials')

            return User.deleteOne({ _id: nutritionistId})
        })
        .then(result => {   //del result, en la propiedad deletecCount
            const { deletedCount } = result

            if(deletedCount === 0)
            throw new Error(`could not delete nutritionist with id ${nutritionistId}`)
        })
}
module.exports = deleteNutritionist