// setTimeout(() => {
//     console.log('hola mundo')
// }, 3000)


const setTimeoutPromised = millis => {
    return new Promise((resolve, reject) => {
        // setTimeout(() => {
        //     resolve()
        // }, millis)

        setTimeout(resolve, millis)
        //setTimeout(reject, millis)
    })
}

setTimeoutPromised(3000)
    .then(() => console.log('hola mundo'))
    .catch(() => console.log('adios mundo cruel'))