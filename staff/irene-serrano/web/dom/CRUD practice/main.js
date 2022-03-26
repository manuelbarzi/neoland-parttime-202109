/* ===================================  CREATE  =================================== */
var _token;
var updateCurrentUsername = document.querySelector(".update-current");

var createForm = document.querySelector(".create-form");

var createUserInput = document.querySelector(".create-input-user");
var createPasswordInput = document.querySelector(".create-input-password");
var createEmailInput = document.querySelector(".create-input-email");

var createFormBtn = document.querySelector(".create-form-btn");
var createFeedback = document.querySelector(".create-feedback");

createFormBtn.addEventListener("click", function (e) {
  e.preventDefault();
  var email = createEmailInput.value;
  var username = createUserInput.value;
  var password = createPasswordInput.value;

  try {
    registerUser(email, username, password, function (error) {
      if (error) {
        createFeedback.innerText = error;
        createFeedback.classList.add("error");
      } else {
        createFeedback.innerText = "Welcome, " + username;
        createFeedback.classList.add("success");
        updateCurrentUsername.innerText = username;
      }
    });
  } catch (error) {
    createFeedback.innerText = error;
    createFeedback.classList.remove("success");
    createFeedback.classList.add("error");
  }
});
/* -------------------------------------------------------------------------------  */

/* ===================================   READ   =================================== */
var readUserInput = document.querySelector(".read-input-username");
var readPasswordInput = document.querySelector(".read-input-password");

var readFormBtn = document.querySelector(".read-form-btn");

var readFeedback = document.querySelector(".read-feedback");

readFormBtn.addEventListener("click", function (e) {
  e.preventDefault();

  var username = readUserInput.value;
  var password = readPasswordInput.value;
  authenticateUser(username, password, function (error, token) {
    if (error) {
      readFeedback.innerText = error;
      readFeedback.classList.remove("success");
      readFeedback.classList.add("error");
    } else {
      retrieveUser(token, function (error, user) {
        _token = token;

        if (error) {
          readFeedback.innerText = error;
          readFeedback.classList.remove("success");
          readFeedback.classList.add("error");
        } else {
          readFeedback.innerText = "Your email is " + user.email;
          readFeedback.classList.add("success");
          updateCurrentUsername.innerText = username;
        }
      });
    }
  });
});
/* -------------------------------------------------------------------------------  */

/* ===================================  UPDATE  =================================== */
var updateFormBtn = document.querySelector(".update-form-btn");
var updateUsernameInput = document.querySelector(".update-input-username");
var updateFeedback = document.querySelector(".update-feedback");

var updateShowUser = document.querySelector(".update-show-user");

updateFormBtn.addEventListener("click", function (e) {
  e.preventDefault();

  var newUsername = updateUsernameInput.value;

  var data = {
    username: newUsername,
  };

  modifyUser(_token, data, function (error) {

    if (error) {
      updateFeedback.innerText = error;
      updateFeedback.classList.remove("success");
      updateFeedback.classList.add("error");
      console.log(error);
    } else {
      console.log(data);
      updateCurrentUsername.innerText = data.username;
    }
  });
});

/* -------------------------------------------------------------------------------  */

/* ===================================  DELETE  =================================== */
var deleteUsernameInput = document.querySelector(".delete-input-username");

var deletePasswordInput = document.querySelector(".delete-input-password");

var deleteBtn = document.querySelector(".delete-form-btn");
var deleteFeedback = document.querySelector(".delete-feedback");

deleteBtn.addEventListener("click", function (e) {
  e.preventDefault();
  var password = deletePasswordInput.value;


  unregisterUser(_token, password, function (error) {

    if (error) {
      console.log("errrror");
      deleteFeedback.innerText = error;
      deleteFeedback.classList.remove("success");
      deleteFeedback.classList.add("error");
    } else if(!error) {
      console.log("eliminaod");
      deleteFeedback.innerText = "User correctly deleted";
      deleteFeedback.classList.add("success");
    }
  });
});

/* -------------------------------------------------------------------------------  */
