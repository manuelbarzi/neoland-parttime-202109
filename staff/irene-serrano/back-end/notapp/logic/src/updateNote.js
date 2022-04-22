const { Note } = require("data/src/models");

function updateNote(userId, noteId, text, color, public) {
  return Note.updateOne(
    { user: userId, _id: noteId },
    { text: text, color: color, public: public }
  ).then((result) => {
    const { matchedCount } = result;
    if (matchedCount === 0) throw new Error(`Note with id ${noteId} not found`);

  });
}
module.exports = updateNote;
