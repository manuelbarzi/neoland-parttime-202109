const Product = require('./product')

Product.cache()
    .then(() => {

const boyfriendJean = new Product ({ id: 'JNS2020-1010', name:'Boyfriend Jean', price:'$120', decription:'Boyfriend Jean', image:'https://www.ae.com/mx/en/p/women/90s-jeans/90s-boyfriend/ae-highest-waist-90s-boyfriend-jean/3437_3778_925?menu=cat4840004', category: 'jeans', quantity: 20, createdAt: '2020-01-01', updatedAt: '2020-01-01'})
const momJean = new Product ({ id: 'JNS2020-2030', name:'Ripped Mom Jean', price:'$120', decription:'Ripped Mom Jean', image:'https://www.ae.com/mx/en/p/women/high-waisted-jeans/mom-jeans/ae-ripped-mom-jean/0436_3788_409?menu=cat4840004', category: 'jeans', quantity: 20, createdAt: '2020-01-01', updatedAt: '2020-01-01'})
const patchJean = new Product ({ id: 'JNS2020-3066', name:'Patched Mom Straight Jean', price:'$120', decription:'Patch Mom Jean', image:'https://www.ae.com/mx/en/p/women/the-new-prep-shop/keep-it-coastal-cool/ae-patched-mom-straight-jean/0436_3792_469?menu=cat4840004', category: 'jeans', quantity: 20, createdAt: '2020-01-01', updatedAt: '2020-01-01'})
const stretchJean = new Product ({ id: 'JNS1020-7666', name:'Stretch Ripped Mom Jean', price:'$120', decription:'Ripped Mom Jean', image:'https://www.ae.com/mx/en/p/women/high-waisted-jeans/mom-jeans/ae-stretch-ripped-mom-jean/0436_3369_926?menu=cat4840004', category: 'jeans', quantity: 20, createdAt: '2020-01-01', updatedAt: '2020-01-01'})
const rippedJean = new Product ({ id: 'JNS1020-5546', name:'Ripped Mom Jean', price:'$120', decription:'Ripped Mom Jean', image:'https://www.ae.com/mx/en/p/women/high-waisted-jeans/mom-jeans/ae-ripped-mom-jean/2322_4597_020?menu=cat4840004', category: 'jeans', quantity: 20, createdAt: '2020-01-01', updatedAt: '2020-01-01'})
const bootCutJean = new Product ({ id: 'JNS1022-3546', name:'Bootcut Jean', price:'$120', decription:'Bootcut Jean', image:'https://www.ae.com/mx/en/p/women/90s-jeans/90s-bootcut-jeans/ae-90s-bootcut-jean/3437_3879_081?menu=cat4840004', category: 'jeans', quantity: 20, createdAt: '2020-01-01', updatedAt: '2020-01-01'})


//Aquí todos se salvan en paralelo, porque todo va en memoria en el mismo array, antes cargada distnto array con c/u:
Promise.all([boyfriendJean.save(), momJean.save(), patchJean.save(), stretchJean.save(), rippedJean.save(), bootCutJean.save()]) 
        .then(() => console.log('Product Saved!!'))
        .catch(err => console.log(err))

    })
