//necesito conectar con mongo a la base de datos , indicar que base de datos voy a usar

const { connect, disconnect } = require('mongoose')

const { User, CreditCard } = require('./models')


//me conecto y creo base de datos
connect('mongodb://localhost:27017/parttime-db')
.then(() => console.log('connected to parttime-db'))
.then(() => {
    const user1 = new User({ name: 'Mariana Martín', email: 'mariana@mail.com', password:'123456789' })
    const user1Card = new CreditCard({ fullName: 'Mariana Martín', number:'1010 1111 2222 3333', expiration: new Date })
    //insertar tarjeta al usuario:
    user1.creditCards.push(user1Card)

    const user2 = new User({ name: 'Pancho López', email: 'pancho@mail.com', password:'9123456789' })
    const user2Card = new CreditCard({ fullName: 'Pancho López', number:'4444 6666 8888 1111', expiration: new Date })
    user2.creditCards.push(user2Card)


    return Promise.all([user1.save(), user2.save()])

})

.then(user => {
    console.log('user and credit card saved')

})

.then(() => disconnect())

//NOTA: la base de datos se crea cuando lance el script en terminal node/src/populate.js