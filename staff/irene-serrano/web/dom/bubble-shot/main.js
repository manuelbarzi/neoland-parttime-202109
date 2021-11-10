var users = [
  {
    username: "admin",
    email: "",
    password: "admin",
  },
];

// save elements in variables
//sections:
var HEADER = document.querySelector("header");
var HEADER_USERNAME = HEADER.querySelector(".username");

var SIGNIN = document.querySelector(".signin");
var SIGNIN_FORM = document.querySelector("form");
var SIGNIN_BTN = SIGNIN.querySelector(".button");
var SIGNIN_FEEDBACK = SIGNIN.querySelector(".signin__feedback");
var SIGNIN_SIGNUP_LINK = SIGNIN.querySelector(".signin_signup-text-link");

var SIGNUP = document.querySelector(".signup");
var SIGNUP_SIGNIN_LINK = SIGNUP.querySelector(".signup_signin-text-link");
var SIGNUP_BTN = SIGNUP.querySelector(".button");
var SIGNUP_FORM = SIGNUP.querySelector("form");

var POSTSIGNUP = document.querySelector(".post-signup");
var POSTSIGNUP_USERNAME = POSTSIGNUP.querySelector(".post-signup-username");
var POSTSIGNUP_BTN = POSTSIGNUP.querySelector(".button");

var GAME = document.querySelector(".game");

//add event listeners to buttons

SIGNIN_BTN.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("click");

  var usernameInput = SIGNIN_FORM.username;
  var passwordInput = SIGNIN_FORM.password;

  var username = usernameInput.value;
  var password = passwordInput.value;

  var user = users.find(function (user) {
    return user.username === username && user.password === password;
  });
  if (!user) {
    SIGNIN_FEEDBACK.classList.remove("off");
  } else {
    SIGNIN.classList.add("off");
    POSTSIGNUP.classList.remove("off");
    POSTSIGNUP_USERNAME.innerText = username;
    HEADER_USERNAME.innerText = username;
  }
});

SIGNIN_SIGNUP_LINK.addEventListener("click", function (e) {
  e.preventDefault();

  SIGNIN.classList.add("off");
  SIGNUP.classList.remove("off");
});

SIGNUP_BTN.addEventListener("click", function (event) {
  event.preventDefault();

  var usernameInput = SIGNUP_FORM.username;
  var emailInput = SIGNUP_FORM.email;
  var passwordInput = SIGNUP_FORM.password;

  var username = usernameInput.value;
  var email = emailInput.value;
  var password = passwordInput.value;

  user = {};

  user.username = username;
  user.email = email;
  user.password = password;

  users.push(user);

  POSTSIGNUP_USERNAME.innerText = username;
  HEADER_USERNAME.innerText = username;

  SIGNUP.classList.add("off");
  POSTSIGNUP.classList.remove("off");
});

SIGNUP_SIGNIN_LINK.addEventListener("click", function (e) {
  e.preventDefault();

  SIGNUP.classList.add("off");
  SIGNIN.classList.remove("off");
});

POSTSIGNUP_BTN.addEventListener("click", function (e) {
  e.preventDefault();

  POSTSIGNUP.classList.add("off");
  GAME.classList.remove("off");
});
