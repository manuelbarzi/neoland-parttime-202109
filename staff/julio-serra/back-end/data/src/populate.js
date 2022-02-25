const { connect, disconnect } = require('mongoose')
const { Brand, Product, Stock, Order, User, CreditCard } = require('./models')

connect('mongodb://localhost:27017/my-store')
    // .then(() => Brand.deleteMany())
    .then(() => Promise.all([Brand.deleteMany(), Product.deleteMany(), Stock.deleteMany(), Order.deleteMany(), User.deleteMany()]))

    // creamos usuarios para luego añadirles las tarjetas
    .then(() => {
        const peter = new User({ name: 'Peter Griffindor', email: 'peter@griffindor.com', password: '123123123' })
        const wendy = new User({ name: 'Wendolain', email: 'wendo@lain.com', password: '123123123' })

        // se devuelve una promesa para guardar los usuarios que creamos anteriormente
        return Promise.all([peter.save(), wendy.save()])
    })

    // dentro de cada usuario le añadimos la tarjeta
    .then(([peter, wendy]) => {
        const peterCard = new CreditCard({ fullName: 'Peter Griffindor', number: '0987 0987 0987 0987', expiration: 'Date' })
        // al crear la tarjeta hay que añadirlas al usuario mediante push
        peter.creditCards.push(peterCard)

        const wendyCard = new CreditCard({ fullName: 'Wendo Pan', number: '1234 1234 1234 1234', expiration: 'Date' })
        wendy.creditCards.push(wendyCard)

        // al añadir las tarjetas tenemos que volver guardar los datos
        return Promise.all([peter.save(), wendy.save()])
        
    })




    .then(() => {
        const nike = new Brand({ name: 'Nike' })
        const adidas = new Brand({ name: 'Adidas' })
        const reebok = new Brand({ name: 'Reebok' })
        const puma = new Brand({ name: 'Puma' })
        const vans = new Brand({ name: 'Vans' })
        const newBalance = new Brand({ name: 'New Balance' })

        return Promise.all([
            nike.save(),
            adidas.save(),
            reebok.save(),
            puma.save(),
            vans.save(),
            newBalance.save()
        ])
    })
    .then(brands => {
        const [nike, adidas, reebok, puma, vans, newBalance] = brands
        const airMax = new Product({ brand: nike.id, pid: 'Nike-Air-Max', model: 'Air Max', price: 120, image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/fb841190-e301-4f4e-8a7c-702526513bb3/air-max-sc-leather-zapatillas-RG66Z2.png' })
        const stanSmith = new Product({ brand: adidas.id, pid: 'Adidas-Stan-Smith', model: 'Stan Smith', price: 100, image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c18da2efe501464ba268a80b00baccbe_9366/Zapatilla_Stan_Smith_Blanco_M20605_01_standard.jpg' })

        return Promise.all([
            airMax.save(),
            stanSmith.save()
        ])
    })
    .then(products => {
        const [airMax, stanSmith] = products
        const airmaxStock = new Stock({ product: airMax.id, quantity: 110, color: 'white', size: 44 })
        const stanSmithStock = new Stock({ product: stanSmith.id, quantity: 100, color: 'green', size: 42 })
    })

    .then(() => console.log('desconectao'))
    .then(() => disconnect)