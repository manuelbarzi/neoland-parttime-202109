//llenar base de datos :
//1.- CONECTO A BASE DE DATOS MONGOOSE

const { connect, disconnect } = require('mongoose')
const { Brand, Product, Stock, Order } = require('./models')

connect('mongodb://localhost:27017/my-store')
    //.then(() => Promise.all([Brand.collection.drop(), Product.collection.drop()])) 

    //para borrar y crear de nuevo la base:
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

        const airMax = new Product({ brand: nike.id, pid: 'NIKE-AIR-MAX', model: 'Air Max', price: 120, image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f442caeb-d894-4de7-8a83-b736e01ab548/air-max-90-g-zapatillas-de-golf-Jqzw8K.png' })
        const nizza = new Product({ brand: adidas.id, pid: 'ADIDAS-NIZZA', model: 'Nizza', price: 80, image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/1ef7f87103e24092b27fa89700a8b059_9366/Zapatilla_Nizza_Negro_CQ2332_01_standard.jpg' })
        const freshFoam = new Product({ brand: newBal.id, pid: 'Fresh-Foam-880v11', model: 'Fresh Foam 880v11', price: 130, image: 'https://www.newbalance.com/pd/fresh-foam-880v11/W880V11-MPS.html' })



        return Promise.all([  //devuelve promesa en el siguiente .then 
            airMax.save(),
            nizza.save(),
            freshFoam.save()
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

        const airMaxOrder = new Order({ stock: airMaxWhite43Stock.id, quantity: 5, date: new Date })  //asocio a la orden
        //recordarr que esto es lo mismo que: 
        
        //airMaxWhite43Stock.quantity = airMaxWhite43Stock.quantity - 5  
        airMaxWhite43Stock.quantity -= 5

        //que me actualice el stock salvando:
        return Promise.all([
            airMaxWhite43Stock.save(),
            airMaxOrder.save()
        ])
    })

    .then(() => disconnect())