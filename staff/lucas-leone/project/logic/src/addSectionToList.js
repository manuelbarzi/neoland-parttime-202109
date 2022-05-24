const { models: { Restaurant, List, Section } } = require('data')
const {
    validators: { validateId, validateString, validateArray },
    errors: { NotFoundError }
} = require('commons')
/**
 * 
 * @param {ObjectId} ListId 
 * @param {String} name 
 * @param {Array de objectId} items 
 * @returns 
 */
function addSectionToList(restaurantId, listId, name, items) {

    validateId(restaurantId, 'restaurant id')
    validateId(listId, 'List id')
    validateString(name, 'name')
    validateArray(items, 'items')


    return Restaurant.findById(restaurantId)
        .then(restaurant => {
            if (!restaurant) throw new NotFoundError(`Restaurant with id ${restaurantId} not found`)

            return List.findById(listId)
                .then(list => {
                    if (!list) throw new NotFoundError(`list with id ${listId} not found`)

                    const section = new Section({ name })

                    items.forEach(item => {
                        section.items.push(item)
                    });

                    list.sections.push(section)

                    return list.save()
                })
        })
        .then(list => { })
}

module.exports = addSectionToList