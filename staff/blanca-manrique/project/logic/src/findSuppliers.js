const { models: { User, Supplier } } = require('data')
const {
    validators: { validateId, validateString },
    errors: { NotFoundError }
} = require('commons')

function findSuppliers(userId, query) {
    validateId(userId, 'user id')
    validateString(query, 'query')

    const keywords = query.split(' ') // ex: ['hola', 'mundo']

    const matchings = []

    keywords.forEach(keyword => {
        const re = new RegExp(keyword, 'i')

        matchings.push({ name: re })
    })

    const criteria = { $or: matchings } // ex: { $or: [{ title: 'hola' }, { title: 'mundo'}, { description: 'hola' }, { description: 'mundo' }]}}

    return User.findById(userId)
        .then(user => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)

            return Supplier.find({user: userId}).find(criteria).lean()
        })
        .then(suppliers => {
            if (suppliers.length === 0) throw new NotFoundError('suppliers not found')

            suppliers.forEach(supplier => {
                supplier.id = supplier._id.toString()

                delete supplier._id
                delete supplier.__v
            })
            return suppliers
        })


}

module.exports = findSuppliers