const { Note } = require('data/src/models')

function updateNote ( noteId, userId, text, color, public ){
    return Note.updateOne({_id: noteId, user: userId}, {text:text, color: color, public: public})

}
module.exports = updateNote