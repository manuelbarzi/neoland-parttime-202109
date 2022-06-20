//new Promise((resolve, reject) => resolve(1))
Promise.resolve(1)
//new Promise((resolve, reject) => reject('wtf'))
//Promise.reject('wtf')
    //.then(val => console.log(val))
    //.catch(error => console.error(error))
    .then(() => fetch('https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles?color=black').then(res => res.json()))
    //.then(res => res.json())
    //.then(vehicles => console.log(vehicles))
    .then(vehicles => vehicles.map(vehicle => fetch(`https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles/${vehicle.id}`).then(res => res.json())))
    .then(fetches => Promise.all(fetches))
    .then(details => details.forEach(detail => console.log(detail)))