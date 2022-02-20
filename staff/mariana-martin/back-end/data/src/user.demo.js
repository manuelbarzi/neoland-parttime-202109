const User = require('./user')


const john = new User({ id: 'USER-123451234', name: 'John Doe', email: 'john@doe.com', password: '11223344' })


//john._doc.name = 'John Smith'
//john._doc.email = 'john@smith.com'



john.save()
    .then(() => console.log('john saved'))
    .catch(err => console.error(err))