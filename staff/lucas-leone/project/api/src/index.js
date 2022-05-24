require('dotenv').config() 


const {mongoose: {connect}} = require('data')
const express= require('express')
const cors = require('cors')
const {registerUser,
authenticateUser,
createList,
addSectionToList,
createItem,
retrieveLists,
retrieveSections,
retrieveList,
retrieveItems,
deleteSection,
unregisterRestaurant,
deleteItem
} = require('./handlers')

const {env:{MONGODB_URL, PORT}}= process


connect(MONGODB_URL)
    .then(()=>{
        console.log('conected to data base')

        const api = express()

        api.use(cors())

        const router = express.Router()

        const jsonBodyParser = express.json()

        router.post('/restaurant', jsonBodyParser, registerUser)
        router.post('/restaurant/auth', jsonBodyParser, authenticateUser)
       
        router.post('/list/:listId/section', jsonBodyParser, addSectionToList)
        router.post('/list', jsonBodyParser, createList)
        
        router.post('/item', jsonBodyParser, createItem)
        
        router.get('/list', retrieveLists)
        router.get('/list/:listId/section', retrieveSections)
        router.get('/list/:listId', retrieveList)
        router.get('/item', retrieveItems)


        router.delete('/list/:listId/section/:sectionId', deleteSection)
        router.delete('/restaurant', jsonBodyParser, unregisterRestaurant)
        router.delete('/list/:listId/section/:sectionId/item/:itemId', deleteItem)

        api.use('/api', router)

        api.listen(PORT, () => console.log('json server yeah!'))
    })