const User = require('./user')

const jules = new User({ id: "USER-113", name: "Jules", email: "jules@jules.com", password: "123123123" })

jules._doc.name = ("JulesCode")
jules._doc.email = ("jule@jule.net")

jules.save() //save devuelve una promise
