const { Note } = require("data/src/models");

function deleteNote(userId, noteId) {
  return Note.deleteOne({ user: userId, _id: noteId }).then((result) => {
    const { deletedCount } = result;
  
    if (deletedCount === 0)
     // throw new Error(`note with id ${noteId} not found at user ${userId}`);
      throw new Error(`You dont have permission to delete this note`);
  });
}

module.exports = deleteNote;
