const Product = require('./product')

debugger

Product.cache()
    .then(() => {
        const airMax270 = new Product({ id: 'DQ7652-100', name: 'Nike Air Max 270', price: '$120', description: 'Nike Air Max blah blah blah', image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/18fdb3df-7760-4519-b2ad-ba1bf6835fe4/air-max-270-womens-shoes-Pgb94t.png', category: 'shoes', quantity: 10, createdAt: '2020-01-01', updatedAt: '2020-01-01' })
        const airForce1 = new Product({ id: '5184082209', name: 'Nike Air Force 1', price: '$140', description: 'Nike Air Force 1 blah blah', image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/75e86a54-105b-4e5c-a04c-5461b3eda5c5/custom-nike-air-force-1-low-fm-change-by-you.png', category: 'shoes', quantity: 10, createdAt: '2020-01-01', updatedAt: '2020-01-01' })
        const airForce1Shadow = new Product({ id: 'DM8157-700', name: 'Nike Air Force 1 Shadow', price: '$120', description: 'Nike Air Force 1 Shadow blah blah', image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/02249cfe-2c9a-4d0f-80a1-f5587163f95f/air-force-1-shadow-womens-shoe-kTgn9J.png', category: 'shoes', quantity: 10, createdAt: '2020-01-01', updatedAt: '2020-01-01' })

        // ...

        Promise.all([airMax270.save(), airForce1.save(), airForce1Shadow.save()])
            .then(() => console.log('Products saved!'))
            .catch(err => console.log(err))
    })