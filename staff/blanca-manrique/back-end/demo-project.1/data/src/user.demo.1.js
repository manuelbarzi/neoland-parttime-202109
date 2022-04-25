const User = require('./user.2')

const paco = new User({id:'1212' ,name:'Paco Paco' ,email:'paquillo@gmail.com', password: '121212'})
// paco.save()

// paco._doc.name = 'Paco Paquillo'
paco.save()
    .then(() => console.log('paco saved'))
    .catch(error => console.error(error))

//paco es una instancia de la clase User, y el método save viene de la clase padre Model --> la instancia de user hereda el método save de la clase padre Model 