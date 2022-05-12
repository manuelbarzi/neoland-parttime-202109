const User = require('./user')

User.cache()
    .then(() => {
        const john = new User({ id: 'USER-123123123', name: 'John Doe', email: 'john@doe.com', password: '123123123' })
        //john._doc.name = 'John Smith'
        //john._doc.email = 'john@smith.com'
        john.save()
            .then(() => console.log('john saved'))
            .catch(err => console.error(err))
    })
