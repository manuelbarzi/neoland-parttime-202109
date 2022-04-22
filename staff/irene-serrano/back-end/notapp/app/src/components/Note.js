import "./Note.css";
import UpdateNote from "./UpdateNote";
import Modal from "./Modal";

import { deleteNote, retrieveUser } from "../logic";
import { useState } from "react";

export default ({ note, onDeleted, user }) => {
  const [feedback, setFeedback] = useState();
  const [modal, setModal] = useState();
  const [refresh, setRefresh] = useState();

  const handleCloseModal = () => setModal(false);

  const handleOpenModal = () => setModal(true);

  const handleCloseModalAndReloadNotes = () => {
    handleCloseModal();
    setRefresh(true);
  };

  const handleDeleteNote = () => {
    try {
      deleteNote(sessionStorage.token, note.id)
        .then(() => {
          setFeedback("Note deleted");
          onDeleted();
        })
        .catch((error) => {
          setFeedback(error.message);
        });
    } catch (error) {
      setFeedback(error.message);
    }
  };

  return (
    <div className={`note note__${note.color}`}>
      {note.userId == user.id ? (
        <div className="note__userButtons">
          <span className="note__deleteButton" onClick={handleDeleteNote}>
            🗑️
          </span>
          <span className="note__editButton" onClick={handleOpenModal}>
            ✏️
          </span>
        </div>
      ) : null}

      <p className="note__text">{note.text}</p>

      <div className="note__info">
        <hr></hr>
        <strong>{note.userName}</strong>
        <p>{note.date}</p>
      </div>
      {feedback ? <p className="note__feedback">{feedback}</p> : null}
      {modal && (
        <Modal
          content={
            <UpdateNote
              onUpdated={handleCloseModalAndReloadNotes}
              noteId={note.id}
              refresh={refresh}
            />
          }
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};
