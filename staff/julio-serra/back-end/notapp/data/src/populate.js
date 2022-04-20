const { connect, disconnect } = require('mongoose')
const { User, Note } = require('./models')

connect('mongodb://localhost:27017/notapp')

    .then(() => console.log('connected to db'))
    .then(() => Promise.all([User.deleteMany(), Note.deleteMany()]))
    .then(() => {
        const almussafes = new User({ name: 'Peter', email: 'peter@almu.com', password: '123123123' })
        const chivito = new User({ name: 'Castillo', email: 'casti@llo.com', password: '123123123' })

        return Promise.all([
            almussafes.save(),
            chivito.save()
        ])
    })

    .then(users => {
        const [almussafes, chivito] = users //destructuramos los usuarios

        const almu1 = new Note({ user: almussafes.id, date: new Date, color: 'blue', public: true, text: 'lorem ipsum very ipsum' })
        const almu2 = new Note({ user: almussafes.id, date: new Date, public: true, text: 'segunda nota con color por defecto' })

        const chivi1 = new Note({ user: chivito.id, date: new Date, text: 'primera nota de chivito privada y con color por defecto' })
        const chivi2 = new Note({ user: chivito.id, date: new Date, color: 'green', public: true, text: 'nota de chivito de color verde y publica'})

        return Promise.all([
            almu1.save(),
            almu2.save(),
            chivi1.save(),
            chivi2.save()
        ])

    })

    .then(() => disconnect())
    .then(() => console.log('disconnected from db'))