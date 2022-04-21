const { connect, disconnect } = require('mongoose')
const { User, CreditCard } = require('./models')

connect('mongodb://localhost:27017/my-store')
    .then(()=> console.log('connected to my-store db '))
    .then(()=> User.deleteMany())
    .then(() =>{
        const user1 = new User({ name: 'Coco Liso', email: 'coco@rizado.com', password: '123123123' })
        const user2 = new User({ name: 'PETER pan', email: 'peter@pan.com', password: '123456789' })
        const user3 = new User({ name: 'pepinillo', email: 'pepi@nillo.com', password: '123123123' })
        const user4 = new User({ name: 'macarron', email: 'maca@ron.com', password: '123123123' })

     
     
     
        /*   const creditCard = new CreditCard({ fullName: 'Coco Liso', number: '1234 1234 1234 1234', expiration: new Date })
        user.creditCards.push(creditCard)
 */
        return Promise.all([
            user1.save(),
            user2.save(),
            user3.save(),
            user4.save()
        ])
    })
    .then(user=>{
        console.log('users saved')
    })
    .then(()=> disconnect())