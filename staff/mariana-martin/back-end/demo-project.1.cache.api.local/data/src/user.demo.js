//Versión con getters y setters en user

const User = require('./user')

User.cache()
    .then(() => {
        const john = new User({ id: 'USER-123123123', name: 'John Doe', email: 'john@doe.com', password: '123123123' })
        
        john.save()
            .then(() => {        
                console.log('john saved')
        
                                      //john._doc.name = 'John Smith'
                                      //john._doc.email = 'john@smith.com'

                john.name = 'John Smith'
                john.email = 'john@smith.com'
                john.password = '010101010101'
        
                return john.save()
            })


            .then(() => console.log('john updated'))
            .catch(err => console.error(err))
    })