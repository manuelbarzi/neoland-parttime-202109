const Product = require ('./product')

const jeans = new Product ({ id: 'JNS2020-1010', name:'Boyfriend Jean', price:'$120', decription:'Boyfriend Jean', image:'https://www.ae.com/mx/en/p/women/90s-jeans/90s-boyfriend/ae-highest-waist-90s-boyfriend-jean/3437_3778_925?menu=cat4840004', category: 'jeans', quantity: 20, createdAt: '2020-01-01', updatedAt: '2020-01-01'})

jeans._doc.name = 'Highwaist Boyfriend Jean' //actualiza datos

jeans.save()
    .then(() => console.log('Product Saved'))
    .catch(err => console.log(err))



