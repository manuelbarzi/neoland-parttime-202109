const Product = require('./product')

const shoes = new Product({ id: 'DQ7652-100', name: 'Nike Air Max', price: '$120', description: 'Nike Air Max', image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/18fdb3df-7760-4519-b2ad-ba1bf6835fe4/air-max-270-womens-shoes-Pgb94t.png', category: 'shoes', quantity: 10, createdAt: '2020-01-01', updatedAt: '2020-01-01' })

shoes._doc.name = 'Nike Air Max 270'

shoes.save()
    .then(() => console.log('Product saved'))
    .catch(error => console.error(error))