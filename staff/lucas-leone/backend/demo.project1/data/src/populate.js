const { connect, disconnect } = require('mongoose')
const { Brand, Product, Stock, Order, CreditCard, User } = require('./models')

connect('mongodb://localhost:27017/my-store')
    //.then(() => Promise.all([Brand.collection.drop(), Product.collection.drop()]))
    .then(() => Promise.all([User.deleteMany(), Brand.deleteMany(), Product.deleteMany(), Stock.deleteMany(), Order.deleteMany()]))

    .then(() => {
        const wendy = new User({ name: 'Wendy Pan', email: 'wendy@pan.com', password: '123123123' })
        const peter = new User({ name: 'Peter Pan', email: 'peter@pan.com', password: '123123123' })

        return Promise.all([wendy.save(), peter.save()])
    })
    .then(([wendy, peter]) => {
        const wendyCard1 = new CreditCard({ fullName: 'Wendy Pan Contomate', number: '1234 1234 1234 1234', expiration: new Date })
        const wendyCard2 = new CreditCard({ fullName: 'Wendy Pan Contomate', number: '2345 2345 2345 2345', expiration: new Date })
        wendy.creditCards.push(wendyCard1, wendyCard2)

        const peterCard = new CreditCard({ fullName: 'Peter Pan Concocho', number: '3456 3456 3456 3456', expiration: new Date })
        peter.creditCards.push(peterCard)

        return Promise.all([wendy.save(), peter.save()])
    })
    .then(([wendy, peter]) => {
        const [, creditCard2] = wendy.creditCards

        creditCard2.number = '5678 5678 5678 5678'

        return wendy.save()
    })

    .then(() => {
        const nike = new Brand({ name: 'Nike' })
        const adidas = new Brand({ name: 'Adidas' })
        const newBal = new Brand({ name: 'New Balance' })
        const puma = new Brand({ name: 'Puma' })
        const vans = new Brand({ name: 'Vans' })
        const converse = new Brand({ name: 'Converse' })

        return Promise.all([
            nike.save(),
            adidas.save(),
            newBal.save(),
            puma.save(),
            vans.save(),
            converse.save()
        ])
    })
    .then(brands => {
        const [nike, adidas, newBal, puma, vans, converse] = brands

        const airMax = new Product({ brand: nike.id, pid: 'NIKE-AIR-MAX', model: 'Air Max', price: 120, image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f442caeb-d894-4de7-8a83-b736e01ab548/air-max-90-g-zapatillas-de-golf-Jqzw8K.png' })
        const nizza = new Product({ brand: adidas.id, pid: 'ADIDAS-NIZZA', model: 'Nizza', price: 80, image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/1ef7f87103e24092b27fa89700a8b059_9366/Zapatilla_Nizza_Negro_CQ2332_01_standard.jpg' })

        return Promise.all([
            airMax.save(),
            nizza.save()
        ])
    })
    .then(products => {
        const [airMax, nizza] = products

        const airMaxBlack42Stock = new Stock({ product: airMax.id, color: 'black', size: 42, quantity: 100 })
        const airMaxWhite43Stock = new Stock({ product: airMax.id, color: 'white', size: 43, quantity: 150 })
        const airMaxGray44Stock = new Stock({ product: airMax.id, color: 'gray', size: 44, quantity: 150 })

        const nizzaWhite44Stock = new Stock({ product: nizza.id, color: 'white', size: 44, quantity: 60 })

        return Promise.all([
            airMaxBlack42Stock.save(),
            airMaxWhite43Stock.save(),
            airMaxGray44Stock.save(),
            nizzaWhite44Stock.save()
        ])
    })
    .then(stocks => {
        const [airMaxBlack42Stock, airMaxWhite43Stock, airMaxGray44Stock, nizzaWhite44Stock] = stocks

        const airMaxOrder = new Order({ stock: airMaxWhite43Stock.id, quantity: 5, date: new Date })
        //airMaxWhite43Stock.quantity = airMaxWhite43Stock.quantity - 5
        airMaxWhite43Stock.quantity -= 5

        return Promise.all([
            airMaxWhite43Stock.save(),
            airMaxOrder.save()
        ])
    })

    .then(() => disconnect())