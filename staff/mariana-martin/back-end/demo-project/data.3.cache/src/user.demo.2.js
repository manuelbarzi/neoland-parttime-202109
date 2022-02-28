const User = require('./user')


const john = new User({ id: 'USER-123451234', name: 'John Doe', email: 'john@doe.com', password: '11223344' })


john.save()
    .then(() => {
        console.log('John Saved!!')
        
         john._doc.name = 'John Smith'
        john._doc.email = 'john@smith.com'
        return john.save()

    })



    .then(() => console.log('John Updated'))
    .catch(err => console.error(err))