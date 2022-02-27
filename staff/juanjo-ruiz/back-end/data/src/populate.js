const { connect, disconnect } = require('mongoose')
const { Brand, Product, Stock } = require('./models')

connect('mongodb://localhost:27017/my-store')
    .then(() => Promise.all([Brand.deleteMany(), Product.deleteMany(), Stock.deleteMany()]))
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

        const airMax42Stock = new Stock({ product: airMax.id, color: 'black', size: 42, quantity: 100 })
        const airMax43Stock = new Stock({ product: airMax.id, color: 'black', size: 43, quantity: 150 })
        const airMax44Stock = new Stock({ product: airMax.id, color: 'black', size: 44, quantity: 150 })

        return Promise.all([
            airMax42Stock.save(),
            airMax43Stock.save(),
            airMax44Stock.save()
        ])
    })
    .then(() => disconnect())