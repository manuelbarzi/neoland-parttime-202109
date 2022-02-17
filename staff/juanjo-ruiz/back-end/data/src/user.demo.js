const User = require('./user')

const sam = new User({ id: 'USER-12341234', name: 'Samuel Poveda', email: 'sampoveda@mail.com', password: 12341234})

sam.save()
    .then(() => console.log('Sam saved'))
    .catch(error => console.error(error))