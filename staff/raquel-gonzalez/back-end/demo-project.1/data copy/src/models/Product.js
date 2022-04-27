const { model } = require ("mongoose")
const { product } = require ("../schemas")

//en base de datos se llama User en mayuscula dentro del esquema user
const Product =  model ("Product", product)



model.exports= Product
