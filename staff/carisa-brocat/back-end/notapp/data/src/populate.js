const { connect, disconnect } = require('mongoose')
const { User, Note } = require('./models')

connect('mongodb://localhost:27017/notapp')
    .then(() => Promise.all([ User.deleteMany(),Note.deleteMany()]))
   
    .then(() => {
        const carycary = new User ({ name: 'CaryCary', email: 'carycary@gmail.com', password: '123456'})
        const ricardin = new User ({ name: 'Ricardin', email: 'Ricardin@gmail.com', password: '123456'})

        return Promise.all([carycary.save(), ricardin.save()])
    })
    .then(users => {

        const [carycary, ricardin] = users

        const notecary1 = new Note({user: carycary.id, date: new Date, color: 'white', public: true, tex: 'This is a carucary new public note' })
        const notecary2 = new Note({user: carycary.id, date: new Date, color: 'red', text: 'This is carycary private note' })
        
        const notericar1 = new Note({user: ricardin.id, date: new Date, color: 'pink', public: true, text: 'This is a ricardin public note' })
        const notericar2 = new Note({user: ricardin.id, date: new Date, color: 'black', public: false, text: 'This is ricardin private note' })
        
        return Promise.all([notecary1.save(), notecary2.save(), notericar1.save(), notericar2.save()])
    })

    .then(() => disconnect())
    .catch(error => console.error(error))