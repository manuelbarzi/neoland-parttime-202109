const { connect, disconnect } = require ("mongoose")
const { User, Note } = require ("./models")

connect ("mongodb: //localhost: 27017/notapp")
    .then (() => Promise.all ([User.deleteMany(), Note.deleteMany()]))
    .then (()=>{
        const pepinillo = new User ({ name: "Pepinillo", email: "pepi@nillo.com", password: "123123123"})
        const alcachofa = new User ({ name: "Alcachofa", email: "alca@chofa.com", password: "12341234"})

        return Promise.all([
            pepinillo.save(),
            alcachofa.save()
        ])
    })

    .then(users => {
       
        const [pepinillo, alcachofa] = users

        const pepi1 = new Note({ user : pepinillo.id, date: new Date , text: 'hola que tal esta nota tiene que ser blanca'   })
        const pepi2 = new Note({ user : pepinillo.id, color: 'yellow', public: true, text: 'esta nota es amarilla y publica' })
        const pepi3 = new Note({ user : pepinillo.id, color: 'red', text: 'esta nota es roja y privada'})

        const alca1 = new Note({ user : alcachofa.id, date: new Date, public: true, text: 'esta nota es blanca y publica'})
        const alca2 = new Note({ user: alcachofa.id, color: 'blue', text:'string vacio es null'})
        const alca3 = new Note({ user: alcachofa.id, color: 'black', text:'privadit nomas'})

        console.log(pepinillo)
        return Promise.all([
            pepi1.save(),
            pepi2.save(),
            pepi3.save(),
            alca1.save(),
            alca2.save(),
            alca3.save()
        ])
    })

    .then(() => disconnect())
    .then(()=> console.log('disconnected from db'))