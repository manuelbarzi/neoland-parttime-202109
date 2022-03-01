const Product = require('./product.1')

const camera = new Product({ id: 'DQ7652-100', name: 'Nikon Z 9', price: '$2469', description: 'Nikon Z 9', image: 'https://cdn.nikoneurope.com/imported/images/web/EU/products/digital-cameras/mirrorless/z9/images/Z9_24_70_2.8_front__Get_Original_.png', category: 'cameras', quantity: 5, createdAt: '2020-01-01', updatedAt: '2020-01-01' })

camera.save()
    .then(() => console.log('Product saved'))
    .catch(error => console.error(error))

