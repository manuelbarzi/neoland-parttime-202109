//lógica de cliente 



function authenticateUser(email, password){

    return fetch('http://localhost:8080/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
    })
    .then(res => {
        const {status} = res

        if(status === 200) 
            return //
            else if (status >=400 && status < 500)
            throw new Error('client error')
            else if (status >= 500)
            throw new Error('server error')
        
    })
}

export default authenticateUser