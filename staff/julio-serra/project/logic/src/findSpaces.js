const { models: { Space } } = require('data')
const { errors: { NotFoundError } } = require('commons')

function findSpaces(query) {
    // validateString(query, 'query')

    const keywords = query.split(' ') // ex: ['hola', 'mundo']
    
    const matchings = []

    keywords.forEach(keyword => {
        const re = new RegExp(keyword, 'i')
        
        matchings.push({ title: re })
        matchings.push({ description: re })
        matchings.push({ type: re })
    })

    const criteria = { $or: matchings } // ex: { $or: [{ title: 'hola' }, { title: 'mundo'}, { description: 'hola' }, { description: 'mundo' }]}}

    return Space.find(criteria).lean().sort('-date')
        .then((spaces) => {

            if (spaces.length === 0) throw new NotFoundError('spaces not found')
            
            return spaces.map(space => {
                space.id = space._id.toString()

                delete space._id
                delete space.__v

                return space
            })
        })
}

module.exports = findSpaces