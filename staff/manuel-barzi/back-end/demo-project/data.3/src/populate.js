const { connect, disconnect } = require('mongoose')
const { User, CreditCard } = require('./models')

connect('mongodb://localhost:27017/parttime-db')
    .then(() => console.log('connected to db'))
    .then(() => {
        const user = new User({ name: 'Coco Liso', email: 'coco@liso.com', password: '123123123' })
        const creditCard = new CreditCard({ fullName: 'Coco Liso', number: '1234 1234 1234 1234', expiration: new Date })
        user.creditCards.push(creditCard)

        return user.save()
    })
    .then(user => {
        console.log('user saved')
    })
    .then(() => disconnect())