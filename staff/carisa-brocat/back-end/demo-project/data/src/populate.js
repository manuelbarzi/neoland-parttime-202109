const { connect, disconnect } = require('mongoose')
const { Brand, Product, Stock, Order,CreditCard, User } = require('./models')


connect('mongodb://localhost:27017/my-store')
    //.then(() => Promise.all([Brand.collection.drop(), Product.collection.drop()])) //lo correcto es hacerlo con deleteMany
    .then(() => Promise.all([ User.deleteMany(),Brand.deleteMany(), Product.deleteMany(), Stock.deleteMany(), Order.deleteMany()]))
   
    .then(() => {
        const carycary = new User ({ name: 'CaryCary', email: 'carycary@gmail.com', password: '123456'})
        const ricardin = new User ({ name: 'Ricardin', email: 'Ricardin@gmail.com', password: '123456'})

        return Promise.all([carycary.save(), ricardin.save()])
    })
    .then(([carycary, ricardin]) =>{
        const carycaryCard1 = new CreditCard({fullName: 'CaryCary Mi Mamita', number: '2358 6780 8769 8474', expiration: new Date})
        const carycaryCard2 = new CreditCard({fullName: 'CaryCary Mi Mamita', number: '2345 6680 8749 8234', expiration: new Date})
        carycary.creditCards.push(carycaryCard1, carycaryCard2)

            const ricardinCard1 = new CreditCard({fullName: 'Ricardin Mi papito', number: '2345 6680 8749 8234', expiration: new Date})
        ricardin.creditCards.push(ricardinCard1)

        return Promises.all([carycary.save(), ricardin.save()])    
    })
    .then(([carycary, ricardin]) => {
        const[, creditCard2] = carycary.creditCards

        creditCard2.number = '8904 6759 9248 7354'

        return carycary.save()
    })

   
    .then(() => {
        const adidas = new Brand({ name: 'Adidas' })
        const nike = new Brand({ name: 'Nike'})
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

        const airMax42Stock = new Stock({ product: airMax.id, color: 'black', size: 42, quantity: 100 })
        const airMax43Stock = new Stock({ product: airMax.id, color: 'black', size: 43, quantity: 150 })
        const airMax44Stock = new Stock({ product: airMax.id, color: 'black', size: 44, quantity: 150 })

        return Promise.all([
            airMax42Stock.save(),
            airMax43Stock.save(),
            airMax44Stock.save()
        ])
    })
    .then(stocks => {
        const [airMaxBlack42Stock, airMaxWhite43Stock, airMaxGray44Stock, nizzaWhite44Stock] = stocks

        const airMaxOrder = new Order({stock: airMaxBlack42Stock.id, qantity: 7, date: new Date})
        //airMaxBlack42Stock.quantity = airMaxBlack42Stock.quantity - 7
        airMaxBlack42Stock.quantity -= 7

        return Promise.all([
            airMaxBlack42Stock.save(),
            airMaxOrder.save()
        ])
    })

    .then(() => disconnect())
    .catch(error => console.error(error))