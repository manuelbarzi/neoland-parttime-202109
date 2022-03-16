const { models: { User }} = require('data')

function updateUser(userId, name, email, password){
    //Validators
                        //busco user cuyo _id sea userid
    return User.updateOne({ _id: userId}, {name, email, password})  //permite buscar y actualizar(updateOne(mongoose))
        .then(result => {
            const { matchedCount } = result   //en el result hay una propiedad del update que es matchedCount(es: 1,ha encontrado 1, si es 0, no) y modifiedCuount(que ha actualizado o no)

            if(matchedCount === 0)  //si es igual no ha encontrado  el user
                throw new Error (`user with id ${userId} not found`)
        })

}

module.exports = updateUser