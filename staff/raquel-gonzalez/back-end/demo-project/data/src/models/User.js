const { model } = require ("mongoose")
const { user } = require ("../schemas")

//en base de datos se llama User en mayuscula dentro del esquema user
const User =  model (user, "User")



model.exports= User
