//creas las variables.
//Tu variable signupPanel= le dices al querySelector que te traiga tu signup del html
var signupPanel = document.querySelector(".signup")
var postSignupPanel = document.querySelector(".post-signup")
var signinPanel = document.querySelector(".signin")
var homePanel = document.querySelector(".home")
var gamePanel = document.querySelector(".game")
var profilePanel = document.querySelector(".profile")
var changeUsernamePanel = document.querySelector(".change-username")
var changePasswordPanel = document.querySelector(".change-password")

//CREAS UNA VARIABLE GLOBAL PARA QUE TE GUARDE EL TOKEN
var _token

//creas una variable con el boton signin dentro del form signup

var signupSigninButton = signupPanel.querySelector('.signup__signin')

//llamas al evento click para que ejecute el codigo si se clicka en el boton singin se apaga en signup.
signupSigninButton.addEventListener('click', function () {
  signupPanel.classList.add('off')
  signinPanel.classList.remove('off')
})

var signinSignupButton = signinPanel.querySelector(".signin__signup")
signinSignupButton.addEventListener("click", function () {
  signinPanel.classList.add("off")
  signupPanel.classList.remove("·off")
})

var signupForm = signupPanel.querySelector(".form")

signupForm.addEventListener("submit", function () {
  //preventdefault para que no se ejecute una y una vez cuando pinchas en algun campo
  event.preventDefault()

  //se activa subtmit cuando se inicia un form para guardar en este caso el name, username y password
  var nameInput = signupForm.name
  var usernameInput = signupForm.username
  var passwordInput = signupForm.password

})

//try-cach sirve capturar el error antes de hacer la llamaa a la API
try {
  registerUser(name, username, password, function (error) {
    if (error) {
      var signupFeedback = signupPanel.querySelector(".signup__feedback")
      //inner.text lo que indica es una modificacion de texto de este caso feedback
      //al mensaje de error
      signupFeedback.innerText = error.message
      signupFeedback.classList.remove("off")

      return
    }
    //si no hay error que se apague off o se encienda
    signupPanel.classList.add("off")
    signinPanel.classList.remove("off")
  })
  //te traes el signup feedback si sale bien te modifica el text a error.mesagge y se apaga el remove
} catch (error) {
  var signupFeedback = signupPanel.querySelector(".signup__feedback")
  signupFeedback.innerText = error.message
  signupFeedback.classList.remove("off")
}
//creas la variable para que te traiga del postSignupPanel el button
var postSignupSigninButton = postSignupPanel.querySelector(".button")

//el elemento del evento es postSignupSigninButton  y el evento click y le indicas al callback
//cuando se encienda el panel post se apague y se encienda signin
//onfocus u onclick es lo mismo que addEventListener ("click") y addEventListerner ("focus")

postSignupSigninButton.addEventListener("click", function () {
  postSignupPanel.classList.add("off")
  signinPanel.classList.remove("off")

})

//te traes el formulario del signinPanel
//Creas la variable signInUsernameImput y te traes el signinForm.username
var signinForm = signinPanel.querySelector(".form")
var signInUsernameInput = signinForm.username

//indicas al usernameInput el evento onfocus para que se apague el mensaje de feebback cuando se clike
signInUsernameInput.onfocus = function () {
  var signinFeedback = signinPanel.querySelector(".feedback")

  signinFeedback.classList.add("off")
}
//Lo mismo que con el signInUsernameImput pero con el password
var signInPasswordInput = signinForm.password

signInPasswordInput.onfocus = function () {
  var signinFeedback = signinPanel.querySelector(".feedback")

  signinFeedback.classList.add(".off")
}

//el submit es para cuando envias un formulario
//Indicando que tu inputusername sea el username del form
signinForm.addEventListener("submit", function (event) {
  event.preventDefault()

  var usernameInput = signinForm.username
  var passwordInput = signinForm.password
  //indicas que te de el valor del username y password
  var username = usernameInput.value
  var passwordInput = passwordInput.value

})

try {
  AuthenticateUser(username, password, function (error, token) {
    if (error) {
      var signinFeedback = signinPanel.querySelector(".feedback")
      signinFeedback.innerText = error.message
      signinFeedback.classList.remove(".feedback--warning")
      signinFeedback.classList.add("off")

      return
    }
    retrieveUser(token, function (error, user) {
      is(error)
      var signinFeedback = signinPanel.querySelector(".signin__feedback")

      signinFeedback.innerText = error.message
      signinFeedback.classList.remove(".off")

      return
    })
    // creamos anteriormente una variable global para ahora poder guardar el token
    _token = token
    //te traes el homePanel
    var homeUser = homePanel.querySelector(".home_-user")
    homeUser.innerText = "Hello", "" + user.name + !
      signinPanel.classList.add("off")
    homePanel.classList.remove("off")
    //start ()
  })
} catch (error) {
  var signinFeedback = signinPanel.querySelector(".feedback")

  signinFeedback.innerHTML = error.message
  signinFeedback.classList.remove("feedbacj--error")
  signinFeedback.classList.add("feedback--warning")

  signinFeedback.classList.remove("off")
  //al boton de tu juego te traes tu query home
  var homeGameButton = homePanel.querySelector(".home__game")
  //si aprietas el boton se enciende el boton profile y al reves
  homeGameButton.onclick = function () {
    profilePanel.classList.add("off")
    gamePanel.classList.remove("off")
  }
// te creas tu variable prifle button y te lo tres de tu homepanel
  var homeProfileButton = homePanel.querySelector (".home__profile")

//homeProfileButton.addeventlistener ("click", function()){}
homeProfileButton.onclick = function (){
  gamePanel.classList.add ("off")
  changeUsernamePanel.classList.add ("off")
  changePasswordPanel.classList.add ("off")
  profilePanel.classList.remove ("off")
}
//cuando quieres cambiar el usename
var profileChangeUsernameButton = 
profilePanel.querySelector(".profile__change-username")
//para apagar y encender los paneles
profileChangeUsernameButton.onclick = function (){
  profilePanel.classList.add ("off")
  changeUsernamePanel.classList.remove("off")
}
//para el cambio de contraseña
var profileChangePasswordButton = profilePanel.querySelector (".profile__change-password")

profileChangePasswordButton.onclick = function (){
  profilePanel.classList.add ("off")
  changePasswordPanel.classList.remove ("off")
}
var changeUsernameForm = changeUsernamePanel.querySelector (".form")

var changeUsernameInput = changeUsernameForm.username

changeUsernameUsernameInput = changeUsernameForm.username

changeUsernameUsernameInout.onfocus= function (){
  var changeUsernameFeedback =
  changeUsernamePanel.querySelector (".feedback")
  //var usernameInput = changeUsernameForm.username
  //var usernameInput = event.target.username
}

var usernameInput = this.username
var username = usernameInput.valur

var data = { username:username}

try {
  modifyUser ( _token, fata, function(error){
    var changeUsernameFeedback= changeUsernamePanel.querySelector(".feedback")

    if (error){
      changeUsernameFeedback.innerText = error.message
      changeUsernameFeedback.classList.remove(".feedback--success")
      changeUsernameFeedback.classList.add ("feedback--error")
      changeUsernameFeedback.classList.remove ("off")

      return
    }
    changeUsernameFeedback.innerText="username correctly update"
    changeUsernameFeedback.add ("feedback--success")
    changeUsernameFeedback.classList.remove ("off")
  })
} catch (error) {
  var changeUsernameFeedback = changeUsernamePanel.querySelector(".feedback")

  changeUsernameFeedback.innerText = error.message
  changeUsernameFeedback.classList.remove ("feedback--suceess")
  changeUsernameFeedback.classList.add ("feedback--error")

  changeUsernameFeedback.classList.remove ("off")
  
}
}







































































