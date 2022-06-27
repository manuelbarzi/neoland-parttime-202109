const { connect, disconnect } = require('mongoose')
const { User, Meal, MealPlan } = require('./models')


connect('mongodb://localhost:27017/project')
    .then(() => console.log('connected to project'))
    .then(() => Promise.all([User.deleteMany(), Meal.deleteMany(), MealPlan.deleteMany()]))

    .then(() => {
        const adminWendy = new User({ role: 0, image: '', username: 'wendy', password: '123456789', email: 'wendy@mail.com', registrationDate: new Date })
        const adminPepe = new User({ role: 0, image: '', username: 'pepe', password: '123456789', email: 'pepe@mail.com', registrationDate: new Date })

        const patientAna = new User({ role: 1, image: '', username: 'ana', password: '123456789', email: 'ana@mail.com', registrationDate: new Date, nutritionist: adminWendy.id, age: '30', weight: 55, height: 160, measures: [90, 70, 95], goal: 'gain weight' })

        return Promise.all([adminWendy.save(), adminPepe.save(), patientAna.save()])

        // return adminWendy.save()
    })


    .then(admins => {

        const [adminWendy, adminPepe, patientAna] = admins


        const breakfast1 = new Meal({ title: 'Breakfast', description: '2 scramble eggs, 1 apple, 1 toast, black coffee', image: '' })

        const snack1 = new Meal({ title: 'Snack', description: '1/2 cup popcorns', image: '' })


        return Promise.all([
            breakfast1.save(),
           
            snack1.save()
        ])
            .then(meals => {
                const [breakfast1, breakfast2, snack1] = meals

                const mealPlanAna = new MealPlan({ admin: adminWendy.id, patient:patientAna.id, monday: [breakfast1, snack1], tuesday: [breakfast1, snack1], wednesday: [breakfast1, snack1], thursday: [breakfast1, snack1], friday: [breakfast1, snack1], saturday: [breakfast1, snack1], sunday: [breakfast1, snack1] })

                return mealPlanAna.save()
            })
    })



    .then(() => disconnect())
    .then(() => console.log('disconnected from project'))

