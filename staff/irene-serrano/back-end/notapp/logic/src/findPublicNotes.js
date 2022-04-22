const { Note, User } = require("data/src/models");

function findPublicNotes(userId) {
  return User.findById(userId).then((user) => {
    if (user) {
      return Note.find({ public: true }).then((notes) => {
        notes
          .map((note) => {
            const doc = note._doc;
            doc.id = doc._id.toString();
            delete doc._id;
            delete doc.__v;

            return doc;
          })
          .then((notes) => {
            notes.forEach((note) => {
              User.findById(note.user)
              .then(
                user => doc.userName = user.name
              ).catch(error => alert(error.message))
            });
          });
        return notes;
      });
    } else throw new Error("please, sign up");
  });
}
module.exports = findPublicNotes;
