const {
  models: { User },
} = require("data");
const { validate } = require("data/src/models/Note");
const {validators} = require('commons')

const {validateEmail, validateName, validatePassword, validateId} = validators
 
function deleteUser(id, password) {
  //TODO validations
  validateId(id)
  validatePassword(password)

  /*return User.deleteOne({_id: id, password : password})
    .then(result => {
      if (result.deletedCount === 0) throw new Error(`user with id ${id}`)
    })*/

  return User.findById(id).then((user) => {
    if (!user) throw new Error(`user with ${id} not found`);

    if (user.password !== password) throw new Error("wrong credentials");

    return User.deleteOne({ _id: id }).then((result) => {
      if (result.deletedCount === 0)
        throw new Error(`cannot delete user with id ${id}`);
    });
  });
}
module.exports = deleteUser;
