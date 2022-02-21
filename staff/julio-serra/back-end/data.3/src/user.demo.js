const { cache } = require('./model')
const User = require('./user')

User.cache()
.then(() => {
    //primero creamos/añadimos el usuario
    const jules = new User({ id: "USER-113", name: "Jules", email: "jules@jules.com", password: "123123123" })
    // guardamos ese usuario
    console.log('user add')
    jules.save()
  
    .then(() => {
        // jules._doc.name = ("JulesCode")
        // jules._doc.email = ("jule@jule.net")
        
        // jules.save() //save devuelve una promise
        // return console.log('user saved')
        // jules.name = ''
    
        // con getters y setters
        jules.name = 'Jules serra'
        jules.password = '456456456'
        console.log('user updated')
        return jules.save()
    })
})

