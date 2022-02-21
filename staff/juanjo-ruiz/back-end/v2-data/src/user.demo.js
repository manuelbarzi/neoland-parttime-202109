const User = require('./user')

User.cache()
    .then(() => {
        const sam = new User({ id: 'USER-12341234', name: 'Samuel Poveda', email: 'sampoveda@mail.com', password: 12341234 })

        sam.save()
            .then(() => {
                console.log('sam saved')

                sam.name = 'Samu Pove'
                sam.email = 'pove@mail.com'
                sam.password = '123123123'

                return sam.save()
            })
            .then(() => console.log('sam update'))
            .catch(error => console.error(error))
    })