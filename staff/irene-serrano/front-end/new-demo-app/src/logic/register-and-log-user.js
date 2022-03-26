import {
  validateUsername,
  validatePassword,
  validateEmail,
  validateCity,
} from "./helpers/validators";

function registerUser(username, email, city, password) {
  validateUsername(username);
  validatePassword(password);
  validateEmail(email);
  validateCity(city);
  console.log("REGISTERING USER");

  return fetch("https://b00tc4mp.herokuapp.com/api/v2/users", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ username, city, email, password }),
  }).then((response) => {
    const { status } = response;
    console.log(status);

   if (status >= 400 && status < 500)
      return response.json().then((payload) => {
        throw new Error(payload.error);
      });
    else if (status >= 500)
      throw new Error("Server error. Please, try again later");
    else   if (status === 201) {
      return fetch('https://b00tc4mp.herokuapp.com/api/v2/users/auth', {
        method: 'POST',
        headers:{
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
        .then(response =>{
            const { status } = response 

            if(status === 200)
            return fetch('https://b00tc4mp.herokuapp.com/api/v2/users',{
        
              headers:{
                  Authorization: `Bearer ${token}`
              }
          })
          .then(response => {
              const {status} = response
      
              if (status === 200)
                  return response.json()
              else if (status >= 400 && status < 500)
                  return response.json().then(payload => {throw new Error(payload.error) })
              else if (status>= 500)
                  throw new Error('server error')
              else
                  throw new Error('unknown error')
          })
            else if(status>= 400 && status <= 500)
                return  response.json().then(payload => { throw new Error(payload.error) })
            else if(status >= 500) 
                throw new Error('Server error. Please, try again later.')
        })
    };
   
  });
}

export default registerUser;
