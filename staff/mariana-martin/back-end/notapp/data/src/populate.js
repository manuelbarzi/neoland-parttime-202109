//conecto y deconecto de mongoose e importo mis modelos 

const { connect, disconnect } = require('mongoose')
const { User, Note } = require('./models')

connect('mongodb://localhost:27017/notapp') //genero una base de datos al conectar
    .then(() => Promise.all([User.deleteMany(), Note.deleteMany()]))
    .then(() => {

        const pepinillo = new User({ name:'Pepinillo', email:'pepi@nillo.com', password: '123456789' })
        const alcachofa = new User({ name:'Alcachofa', email:'alca@chofa.com', password: '987654321' })

        return Promise.all([
            pepinillo.save(),
            alcachofa.save()
        ])
        .then(users => {
            
            const [pepinillo, alcachofa ] = users

            const pepinillo1 = new Note({ user: pepinillo.id, date: new Date, text:'Hola, esta nota es blanca' })
            const pepinillo2 = new Note({ user: pepinillo.id, color: 'yellow', public: true, text: 'Esta nota es amarilla y publica'})
  
            const alca1 = new Note({ user: alcachofa.id, date: new Date, public:true, text:'Esta nota es blanca y publica' })

            return Promise.all([
                pepinillo1.save(),
                pepinillo2.save(),

                alca1.save()
            ])
        })
    })

    .then(() => disconnect())
    .then(()=> console.log('disconnected from db'))