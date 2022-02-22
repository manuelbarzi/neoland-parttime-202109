const User = require('./user')

User.cache()
//creo una instancia de user --> la guardo en la base de datos --> modifico los datos de la instancia --> vuelvo a salvar
    .then(() => {
        //creo una instancia de tipo user
        const paco = new User({ id: '1212', name: 'Paco Paco', email: 'paquillo@gmail.com', password: '121212' })

        paco.save() //guardo la instacia
            .then(() => {
                console.log('paco saved')
                //modifico la instancia que acabo de crear
                paco._doc.name = 'Paco Smith'
                paco._doc.email = 'paco@smith.com'
                //guardo el usuario con los datos modificados
                return paco.save()
            })
            .then(() => console.log('paco updated'))
            .catch(error => console.error(error))
    })



