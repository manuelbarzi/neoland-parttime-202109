const { mongoose: { connect, disconnect } } = require('data')
const { registerUser, authenticateUser, findSpaces, retrieveLattestSpaces } = require('.')

connect('mongodb://localhost:27017/spacelocal')
    .then(() => console.log('connected to db'))
    .then(() => {
            try {
                // return registerUser('julio', 'jul@io.com', '123123123', '')

                //     .then(() => console.log('user registered'))
                //     .catch(error => console.error(error))

                return findSpaces('spar')
                // return retrieveLattestSpaces()
                    .then(console.log)
                    .catch(console.error)
            } catch (error) {
                console.error(error)
            }
        })

        // try {
        //     return authenticateUser('jul@io.com', '123123123')
        //         .then(id => console.log('user authenticated', id))
        //         .catch(error => console.log(error))
        // } catch (error) {
        //     console.error(error)
        // }
   // })

    .then(() => disconnect())
    .then(() => console.log('disconnected from db')) 