//1. Necesitamos que los usuarios se registren o se hayan registrado para poder iniciar el juego.
//Para tener sus nombres, usuarios y contraseñas vamos a crear un array vacío en el que se van a ir almacenando en memoria los datos que ponen los usuarios en el panel de registro (signup):Vamos a guardar en memoria los usuarios

var users =[]


//La primera pantalla de nuestro juego es SIGNUP--REGISTRO DE USUARIO
//En caso de que YA tengan cuenta: tenemos que localizar el botón de SIGNIN, es decir, si ya tienen cuenta les lleva al panel de SIGNIN--ACCESO A MI CUENTA
//1. Si rellenan el formulario de registro es que no tienen cuenta previa
//2. Si pulsan el botón de SIGNIN ya tienen cuenta---tenemos que localizar ese botón de signin que se encuentra dentro de signup, de forma que si ya tengo cuenta y quiero ir directamente al ACCESO el panel de SIGNUP se quede en off y se active el panel de SIGNIN

var signupPanel = document.querySelector('.signup')
var signinPanel = document.querySelector('.signin')


//Traemos el botón de signin dentro del panel signup:
var signupSigninButton = signupPanel.querySelector('.signup__signin')

//Si pulsa el botón de signin que está en el panel de signup queremos desactivar el panel de SIGNUP y activar el panel de SIGNIN. 
//(Todo queda recogido en nuestra función callback):
signupSigninButton.addEventListener('click',function(){
    signupPanel.classList.add('off')
    signinPanel.classList.remove('off')
})

 //Hacemos lo mismo en el panel de SIGNIN. 
 //Si queremos ACCEDER al juego pero no estamos registrados, debemos volver al panel de SIGNUP y hacer el registro
 //Si estamos en el panel de SIGNIN y queremos volver a SIGNUP:
 //1. Localizamos el botón de signup dentro del panel de signin
 //2. Si hacemos click en ese botón: ACTIVAMOS el panel de signup y DESACTIVAMOS el panel de signin
var signinSignupButton = signinPanel.querySelector('.signin__signup')
signinSignupButton.addEventListener('click',function(){
    signinPanel.classList.add('off')
    signupPanel.classList.remove('off')
})


//Necesitamos conseguir los datos del formulario de registro
var signupForm = signupPanel.querySelector('form')

//Posteriormente vamos a necesitar que después de REGISTRARNOS(signup) nos lleve a otro panel que nos diga que todo ha ido bien y que ahora ya podemos ACCEDER(signin)
var postSignupPanel = document.querySelector('.post-signup')

//Procedo a sacar los datos del formulario de registro del panel signup:
//'submit'--cuando alguien le da al botón, qué ocurre:
signupForm.addEventListener('submit',function(event){
    event.preventDefault() //Para evitar que se recarge la página y perdamos lo que tenemos en memoria (users)

    var nameInput = signupForm.name
    var usernameInput = signupForm.username
    var passwordInput = signupForm.password

    var name = nameInput.value // va a tomar todo lo que esté dentro del atributo name del input name
    var username = usernameInput.value // va a tomar todo lo que esté dentro del atributo name del input username
    var password = passwordInput.value // va a tomar todo lo que esté dentro del atributo name del input password

    var user = {}

    user.name = name
    user.username = username
    user.password = password

    users.push(user) // mandamos al array vacio los datos del objeto user

    //Creo un panel post registro (post-signup) en el que le confirmo al usuario que todo ha ido bien y que ahora ya puede acceder al juego (signin).
    //Quiero ACTIVAR el panel post registro y DESACTIVAR el panel de registro 
    signupPanel.classList.add('off')
    postSignupPanel.classList.remove('off')
})

//Dentro del panel post registro (post-signup) tengo un botón que me lleva al ACCESO (signin). Localizo ese botón:
var postSignupSigninButton = postSignupPanel.querySelector('button')
//Si hago click sobre el botón que dentro de post-signup me lleva a signin: ACTIVO el panel de signin y DESACTIVO el post-signup panel.
postSignupSigninButton.addEventListener('click', function(){
    postSignupPanel.classList.add('off')
    signinPanel.classList.remove('off')
})

//Cuando llego a signin tengo que comprobar que las credenciales que está metiendo el usuario estén en la base de datos (users).
//Para ello recojo los datos del formulario del panel de signin:
var signinForm = signinPanel.querySelector('form')

signinForm.addEventListener('submit',function(event){
    event.preventDefault() //Para evitar que se recarge y perdamos lo que tenemos en memoria

    var usernameInput = signinForm.username
    var passwordInput = signinForm.password

    var username = usernameInput.value
    var password = passwordInput.value

    //Necesito contrastar las crecenciales que está metiendo el usuario con las que ya están en la base de datos(users). 
    // si el usuario existe y la contraseña coincide le dejamos entrar al juego

    //Comprobando si el usuario existe o no:¿está en nuestro array?--- si lo está llevame al panel del game

    var user = users.find(function(user){
        return user.username === username && user.password === password
    })
    // find va a buscar dentro de users si hay un usuario con las dos condiciones que hemos puesto dentro de la callback (username y password). Si encuentra ese usuario lo va a devolver y lo va a mostrar en la variable user.
    //Si find no encuentra nada, devuelve undefined

    if(!user){
        var signinFeedback = signinPanel.querySelector('.signin__feedback')
        signinFeedback.innerText = 'wrong credentials'
        signinFeedback.classList.remove('off')
        //Si no encuentra el usuario es que hay un error. Necesito buscar dentro del signin el signin__feedback que es el que me contiene el error: 'K ase loco'
        //Inyectar texto: cuando cometo un error, inyectar el texto de 'K ase loco' en vez de hacer un alert que es una chapuza.Lo que yo quiero es que me reemplace ese 'k ase loco' por un 'wrong credentials'
        //Por último quiero que me muestre el mensaje de 'wrong credentials' para ello lo ACTIVO
    }else{
        var levelUser = levelPanel.querySelector('.level__user')

        levelUser.innerText = 'Welcome ' + user.name + '!'

        signinPanel.classList.add('off')
        levelPanel.classList.remove('off')
    }
    //Si no nos devuelve ningún usuario es que no ha encontrado ninguno dentro de la base de datos users que coincida por lo tanto le pedimos que nos saque un alert de usuario no encontrado
    //Si nos devuelve una coincidencia, es decir, si hay un match con la base de datos users queremos que nos ACTIVE el juego y nos DESACTIVE el panel de acceso (signin)
})
