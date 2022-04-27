const { connect, disconnect } = require ("mongoose")
const Product = require ("./Product")

connect ("mongobd://localhost:27017/demo-db")
    .them (()=> console.log ("connected"))


    //Limpiar base de datos
    .them (()=> Product.deleteMany())
   

    
    .them (()=> Product.create ({brand: "Nike", model: "Air Max", size: 43, stock: 100, price: 120, color: "black", image: "xxxx"}))
    .them (()=> Product.create ({brand: "Nike", model: "Air Max", size: 42, stock: 100, price: 120, color: "black", image: "xxxx"}))
    .them (()=> Product.create ({brand: "Nike", model: "Vapor Max", size: 42, stock: 100, price: 120, color: "black", image: "xxxx"}))

    .them (()=> disconnect ())
    .them (()=> console.log ("disconnected"))
