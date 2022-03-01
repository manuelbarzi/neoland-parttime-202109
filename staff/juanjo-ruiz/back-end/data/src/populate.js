const { connect, disconnect } = require('mongoose')
const { Brand, Product, Stock, Order, User, CreditCard } = require('./models')

connect('mongodb://localhost:27017/my-store')
    .then(() => Promise.all([Brand.deleteMany(), Product.deleteMany(), Stock.deleteMany()]))

    .then(() => {
        const wendy = new User({ name: 'Wendy Pan', email: 'wendy@pan.com', password: '123123123' })
        const peter = new User({ name: 'Peter Pan', email: 'peter@pan.com', password: '123123123' })

        return Promise.all([wendy.save(), peter.save()])
    })
    .then(([wendy, peter]) => {
        const wendyCard1 = new CreditCard({ fullName: 'Wendy Pan Contomate', number: '1234 1234 1234 1234', expiration: new Date })
        const wendyCard2 = new CreditCard({ fullName: 'Wendy Pan Contomate', number: '2345 2345 2345 2345', expiration: new Date })
        wendy.creditCarts.push(wendyCard1, wendyCard2)

        const peterCard = new CreditCard({ fullName: 'Peter Pan Concocho', number: '3456 3456 3456 3456', expiration: new Date })
        peter.creditCarts.push(peterCard)

        return Promise.all([ wendy.save(), peter.save()])
    })
    .then(([wendy, peter]) => {
        const [, creditCard2] = wendy.creditCarts // con la coma hacemos referencia que no queremos el primer parametro

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

        const airMax = new Product({ brand: 'nike.id', pid: 'NIKE-AIR-MAX', model: 'Air Max', price: 120, image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/08f113fb-396f-4445-a89b-f82752a7cb82/air-max-90-g-zapatillas-de-golf-Jqzw8K.png' })
        const nizza = new Product({ brand: 'adidas.id', pid: 'ADIDAS-NIZA', model: 'Nizza', price: 80, image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1ef7f87103e24092b27fa89700a8b059_9366/Zapatilla_Nizza_Negro_CQ2332_01_standard.jpg' })

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

        const nizzaWhite44Stock = new Stock({ product: nizza.id, color: 'whire', size: 44, quantity: 60 })

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

        airMaxWhite43Stock.quantity -= 5 // === airMaxWhite43Stock.quantity = airMaxWhite43Stock.quantity - 5

        return Promise.all([
            airMaxWhite43Stock.save(),
            airMaxOrder.save()
        ])
    })
    .then(() => disconnect())