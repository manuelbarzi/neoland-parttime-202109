const User = require('./user')

User.cache()
    .then(() => {

        const maria = new User ({id: 'USER-12345678', name: 'María', email: 'maria@gmail.com', password: '1234567'})
        const lola = new User ({id: 'USER-12356787', name: 'Lola', email: 'lola@gmail.com', password: '000000567'})


        return Promise.all([maria.save(), lola.save()])
    })

    .then(() => console.log('User saved!!!'))
    .catch(() => console.log(err))
