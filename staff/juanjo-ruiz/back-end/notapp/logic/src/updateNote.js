const { models: { Note } } = requite('data')

function updateNote(noteId, text, color, public) {

    return Note.updateOne({ _id: noteId }, { text: text, color: color, public: public })

}

module.exports = updateNote