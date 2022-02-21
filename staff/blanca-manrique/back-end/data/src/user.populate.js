const User = require('./user')

User.cache()
    .then(() => {
        const harry = new User({id: 'USER-20220217193600', name:'Harry Potter', email:'potter@gmail.com', password: '121212', createdAt: '2020-01-01', updatedAt: '2020-01-01'})
        const sirius = new User({id: 'USER-20220217193800', name:'Sirius Black', email:'siriusblack@gmail.com', password: '121212', createdAt: '2020-02-01', updatedAt: '2020-02-01'})

        return Promise.all([harry.save(), sirius.save()])
    })
    .then(() => console.log('Users saved!'))
    .catch(error => console.error(error))