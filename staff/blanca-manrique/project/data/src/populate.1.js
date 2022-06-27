const { connect, disconnect } = require('mongoose')
const { User, Supplier, Product, Variant, Item, Order, Note } = require('./models')

connect('mongodb://localhost:27017/project')
    .then(() => Promise.all([User.deleteMany(), Supplier.deleteMany(), Product.deleteMany(), Variant.deleteMany(), Item.deleteMany(), Order.deleteMany(), Note.deleteMany()]))

    .then(() => {
        //hay que encriptar la password...si no, no te deja entrar en la app
        const Blanca = new User({ username: 'blanca', email: 'blanca@qq.com', password: '121212' })

        return Promise.all([Blanca.save()])
    })
    .then(users => {
        const [Blanca] = users

        const SuzhouDriving = new Supplier({ user: Blanca.id, name: 'Suzhou Driving Strong Ltd.', email: 'su@zhou.com', web: 'suzhoudrivingstrong', phone: '86 999557121', adress: 'No 286 Dongping Street, Industrial Park, Suzhou, China', contactPerson: 'Yi Hui', tradeAssurance: true })
       
        return Promise.all([
            SuzhouDriving.save()
        ])
    })
    .then(suppliers => {
        const [SuzhouDriving] = suppliers

        const wineOpener = new Product({ supplier: SuzhouDriving.id, supplierProductId: '8344444067581263', supplierProductUrl: 'https://www.alibaba.com/product-detail/Wine-Opener-Electric-Opener-Push-type_1600206009330.html?spm=a2700.galleryofferlist.topad_classic.d_image.2ba97c943qedJB', name: 'Wine opener', category: 'home and kitchen', brand: 'OEM', model: 'sustainable one stop', material: 'stainless steel', price: 7, salePrice: 23 })
        
        return Promise.all([
            wineOpener.save()
        ])
    })
    .then(products => {
        const [wineOpener] = products

        const wineOpenerWhite = new Variant({ product: wineOpener.id, size: 'none', color: 'white', stockOnHand: 55, criticalStock: 25 })

        return Promise.all([
            wineOpenerWhite.save()

        ])
    })
    .then(variants =>{})

    .then((users, suppliers, products, variants) => {
            // const [Blanca] = users
            // const [SuzhouDriving] = suppliers
            // const [wineOpener] = products
            // const [wineOpenerWhite] = variants

            const order1 = new Order({
                user: Blanca.id, createdAt: new Date("2022-01-01T12:01:18.104Z"), status: 'completed',
                items: [
                    new Item({
                        variant: wineOpenerWhite.id,
                        quantity: '200',
                        price: 11
                    })
    
                ],
                notes: [
                    new Note ({
                        user: Blanca.id,
                        text: 'Hola buenas noches',
                        date: new Date("2022-01-01T12:01:18.104Z")
                    })
                    
                ]
            })
    
            // const order2 = new Order({user: Blanca.id, createdAt: new Date, status: 'completed', items:[{
            //     variant:'6283fba22fbb4ea294df855a'}, {quantity: '240'}, {price: 9}
            // ], notes:[{text: 'Holiiiiiii'}] })
    
            return Promise.all([
                order1.save()
                // order2.save()
            ])
        })


    .then(() => disconnect())