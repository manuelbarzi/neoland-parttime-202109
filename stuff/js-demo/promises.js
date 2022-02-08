
//esta misma función setTimeout se hará con promises:
setTimeout(() =>{
    console.log('hola mundo')
}, 3000 )

// creo una función que devuelva una promesa:

const setTimeoutPromised = millis => {
    return new Promise((resolve, reject) => {  // resolve y reject son los callabacks, si va bien : resolve si no: ejecet //esta promise es una closure


        // setTimeout(resolve, millis)

        setTimeout(reject, millis) //cuando vaya mal, se llama a reject
    })
}

setTimeoutPromised(3000)  
.then(() => console.log('hola mundo'))  //Haz esto
.catch(()=> console.log('adiós mundo cruel') ) //cuando va algo mal, llamas al reject