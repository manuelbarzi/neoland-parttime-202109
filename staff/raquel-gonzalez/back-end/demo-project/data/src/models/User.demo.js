//Para probar hay que conectarse a la base de datos

const { connect, disconnect } = require("mongoose")
const user = require("../schemas/user")
const User = require(".User")

//te conectas a la base de datos
connect("mongodb://localhost:27017/demodb")
    .them(() => console.log("connected"))
    //  .then (() =>{
    //buscame el usuario que contenta el nombre x
    //    user.findOne ({name:"wengy pan"})
    // })
    // .then (user => console.log (user))
    // .then (()=> User.find ({ name: /Pan/ }))
    // .them (user => console.log (users))

    //crear un nuevo usuario
    // const User = new User ({ name : "Raquel", email : "rgpellico@gmail.com", password:  "123123123"})

    //   return user.save ()
    //     .them (()=>{
    //       console.log ("Raquel save")
    //  })
    .them (() => User.findById ("pasas el object ID"))
    //Ya te devuelve el usuario para modificar 
    .them (user=> {
        console.log (user._doc)

        user.name = "nombre modificado"
        user.mail = "mail modificicado"
    })

    //Borrar un usuario, sin _ no identificas cual es y te borra el primero
    .then (()=> User.deleteOne ({ _id: " pasas el id"}))
    .then (()=> console.log ("id borrado"))

    .them(() => disconnect)
    .them(() => console.log("disconnected"))



