const {connect, disconnect } = require('mongoose')
const { User, Supplier, Product, Variant, Item, Order} = require('./models')

connect('mongodb://localhost:27017/project-populate')
    .then(() =>Promise.all([User.deleteMany(), Supplier.deleteMany(), Product.deleteMany(), Variant.deleteMany(), Item.deleteMany(), Order.deleteMany()]) )

    .then(()=>{
        const Blanca = new User({ username: 'blanca', email: 'blanca@qq.com', password: '121212'})
        const Alex = new User({ username: 'alex', email: 'alex@qq.com', password: '121212'})

        return Promise.all([Blanca.save(), Alex.save()])
    })
    .then(users=>{
        const [Blanca, Alex] = users

        const SuzhouDriving = new Supplier({user: Blanca.id, name: 'Suzhou Driving Strong Ltd.', email:'su@zhou.com', web: 'suzhoudrivingstrong', phone:'86 999557121', adress:'No 286 Dongping Street, Industrial Park, Suzhou, China',contactPerson:'Yi Hui', tradeAssurance: true })
        const YiWuImportExport = new Supplier({user: Blanca.id, name: 'Yi Wu Import And Export Co., Ltd.', email:'wu@yi.com', web: 'wuyitrain', phone:'86 753227010', adress:'No 877 Chengbei Road, Futian Street, Yiwu City, Zhejiang , China',contactPerson:'Ma Yue', tradeAssurance: true })
        const GuangzhouFurniture = new Supplier({user: Alex.id, name: 'Guangzhou City Furniture Co., Ltd.', email:'guangzhou@qq.com', web: 'guangzhoufurniturecity', phone:'86 861319800', adress:'No 14, Guixiang Street, Tianxin, Baiyun District, Guangzhou City, Guangdong, China', contactPerson:'Kevin Han', tradeAssurance: true })
        const FoshanFurniture = new Supplier({user: Alex.id, name: 'Foshan Youda Furniture Co., Ltd.', email:'foshan@qq.com', web: 'foshanYoudafurniture', phone:'86 230981165', adress:'No. 21, Zhenxing Road, Mailang Xisha Industrial Zone, Longjiang Town, China', contactPerson:'Lu Lu', tradeAssurance: true })

        return Promise.all([
            SuzhouDriving.save(),
            YiWuImportExport.save(),
            GuangzhouFurniture.save(),
            FoshanFurniture.save()
        ])
    })
    .then(suppliers =>{
        const [SuzhouDriving, YiWuImportExport] =suppliers

        const wineOpener = new Product({supplier: SuzhouDriving.id, supplierProductId:'8344444067581263', supplierProductUrl:'https://www.alibaba.com/product-detail/Wine-Opener-Electric-Opener-Push-type_1600206009330.html?spm=a2700.galleryofferlist.topad_classic.d_image.2ba97c943qedJB', name:'Wine opener', category:'home and kitchen', brand:'OEM', model:'sustainable one stop', material:'stainless steel', price: 7, salePrice:23 })
        const officeChair = new Product({supplier: YiWuImportExport.id, supplierProductId:'975293776332334T', supplierProductUrl:'https://www.alibaba.com/product-detail/gas-lift-staff-executive-ergonomic-mesh_60758228884.html?spm=a2700.shop_plgr.41413.26.3985515aaki3t1', name:'Office Chair', category:'office and stationery', brand:'Jingtian', model:'ergonomic mesh office chair', material:'polyester mesh', price: 6, salePrice:98 })
        const gardenSofaAlum = new Product({supplier: YiWuImportExport.id, supplierProductId:'975754655912001G', supplierProductUrl:'https://www.alibaba.com/product-detail/Garden-Sofa-Hot-Selling-High-Quality_1600458025514.html?spm=a2700.galleryofferlist.normal_offer.d_image.5eec62a1VhwQWb&s=p', name:'Garden Sofa Aluminum', category:'gardening', brand:'XMLyuan', model:'garden sofa three seat aluminum', material:'aluminum alloy', price: 221, salePrice:419 })
        const gardenSofaWood = new Product({supplier: YiWuImportExport.id, supplierProductId:'975964666482145G', supplierProductUrl:'https://www.alibaba.com/product-detail/Garden-Sofa-Outdoor-Lounge-Cheap-Garden_1600114083787.html?spm=a2700.galleryofferlist.normal_offer.d_image.5eec62a1VhwQWb&s=p', name:'Garden Sofa Wood', category:'gardening', brand:'XMLyuan', model:'garden sofa three seat acacia wood', material:'acacia wood', price: 230, salePrice:451 })
        const pilatesBall = new Product({supplier: GuangzhouFurniture.id, supplierProductId:'6221230009633952', supplierProductUrl:'https://www.alibaba.com/product-detail/Balance-Pilates-Ball-Stability-Pilates-Fitness_1600233369311.html?spm=a2700.galleryofferlist.normal_offer.d_title.86dac369ohVZTg&s=p', name:'Pilates Balance Ball', category:'sports and outdoors', brand:'Engine', model:'yoga hemisphere ball', material:'Pvc', price: 13, salePrice:69 })
        

        return Promise.all([
            wineOpener.save(),
            officeChair.save(),
            gardenSofaAlum.save(),
            gardenSofaWood.save(),
            pilatesBall.save()
        ])
    })
    .then(products =>{
        const [wineOpener] = products

        const wineOpenerWhite = new Variant({product: wineOpener.id, size:'none', color:'white', stockOnHand: 55, criticalStock:25 })
        const wineOpenerDarkBrown = new Variant({product: wineOpener.id, size: 'none', color:'dark brown', stockOnHand: 50, criticalStock: 20 })
        const officeChairBlack = new Variant({product: officeChair.id, size: 'none', color:'black', stockOnHand: 875, criticalStock: 112 })
        const officeChairBrown = new Variant({product: officeChair.id, size: 'none', color:'brown', stockOnHand: 55, criticalStock: 15 })
        const officeChairGrey = new Variant({product: officeChair.id, size: 'none', color:'grey', stockOnHand: 120, criticalStock: 60 })
        

        return Promise.all([
            wineOpenerWhite.save(),
            wineOpenerDarkBrown.save(),
            officeChairBlack.save(),
            officeChairBrown.save(),
            officeChairGrey.save(),
            
        ])
    })
    .then(variants =>{

    })

    .then(() => disconnect())