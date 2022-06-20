new Promise((resolve, reject) => {
    resolve(10)
    //reject(new Error('chungo 1'))
})
    .then(num => console.log(num))
    .catch(error => console.error(error))
    .then(() => 20)
    .then(num => console.log(num))
    .then(() => {
        //throw new Error('chungo 2')

        return 30
    })
    .then(num => console.log(num))
    .catch(error => console.error(error))
    .then(() => 
        new Promise((resolve, reject) => 
             //reject(new Error('chungo 3'))
            resolve(31)
        )
    )
    //.then(() => 40)
    .catch(error => console.error(error))
    .then(num => console.log(num))
    .then(() => new Promise((resolve, reject) => 
                        reject(new Error('chungo 4'))
                    )
                    .then(num => console.log(num))
                    .catch(error => console.error(error))
                    .then(() => 50)
    )
    .then(num => console.log(num))
    .catch(error => console.error(error))
//10
//20
//30
//31
//Error: chungo 4
//   at <anonymous>:26:32
//    at new Promise (<anonymous>)
//    at <anonymous>:25:17
//50