import {valideteUsername, validatePassword} from './helpers/validators'

function registerUser(name, username, password, city, country) {
   if (typeof name !== 'string') throw new TypeError('name is not string')
   if (!name.trim()) throw new Error('name is empty or blank')

   if (typeof city !== 'string') throw new TypeError('city is not string')
   if (!city.trim()) throw new Error('city is empty or blank')

   if (typeof country !== 'string') throw new TypeError('country is not string')
   if (!country.trim()) throw new Error('country is empty or blank')


   valideteUsername(username)
   validatePassword(password)

   return fetch('https://b00tc4mp.herokuapp.com/api/v2/users',{
      method:'POST',
      headers:{
         'Content-type': 'application/json'
      },
      body: JSON.stringify({name, username, password, city, country})
   })
      .then(response =>{
         const {status} = response

         if(status === 200)
            return // no hay nada que devolver
         else if(status >= 400 && status < 500)
            return response.json().then(payload =>{throw new Error(payload.error)})
         else if(status >=500)
            throw new Error ('server error')
      })
}
export default registerUser