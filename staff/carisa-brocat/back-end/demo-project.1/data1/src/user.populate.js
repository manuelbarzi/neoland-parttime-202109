const User = require('./user')

User.cache()
.then(()=>{
    const peter = new User({ id: 'USER-345345345', name: 'Peter Pan', email: 'peter@pan.com', password: '123123123', createdAt: '2020-01-01', updatedAt: '2020-01-01' })
    const wendy = new User({ id: 'USER-456456456', name: 'Wendy Pan', email: 'wendy@pan.com', password: '123123123', createdAt: '2020-01-01', updatedAt: '2020-01-01' })

    return Promise.all([peter.save(), wendy.save()])
})
.then(() => console.log('Users saved!'))
.catch(err => console.log(err))