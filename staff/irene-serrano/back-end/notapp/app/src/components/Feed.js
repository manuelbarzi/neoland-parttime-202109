import { retrievePublicNotes, retrieveUser } from "../logic";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Note from "./Note";
import Modal from "./Modal";
import NoteDetail from "./NoteDetail";

import "./Feed.css";

export default ({ refresh, view }) => {
  const [notes, setNotes] = useState();
  const navigate = useNavigate();
  const [feedback, setFeedback] = useState();

  const [user, setUser] = useState();

  const getUser = () => {
    try {
      retrieveUser(sessionStorage.token)
        .then((user) => setUser(user))
        .catch((error) => setFeedback(error.message));
    } catch (error) {
      setFeedback(error.message);
    }
  };

  const getAllNotes = () => {
    try {
      retrievePublicNotes(sessionStorage.token)
        .then((notes) => {
          setNotes(notes);
        })
        .catch((error) => setFeedback(error.message));
    } catch (error) {
      setFeedback(error.message);
    }
  };

  if(view === "allNotes") getAllNotes() 

  useEffect(() => {
  
    getAllNotes()
    
    getUser();
  }, [refresh]);

  const handleCloseModal = () => navigate("/");
  const handleDeletedNoteAndRefresh = () => getAllNotes();

  return (

    <div className="Feed">
      {feedback ? <p>{feedback}</p> : null}
      {notes ? (
        <ul className="Feed__notes">
          {notes.map((note) => (
            <li key={note.id}>
              <Note
                note={note}
                onDeleted={handleDeletedNoteAndRefresh}
                user={user}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>no notes</p>
      )
      
      }

      <Routes>
        <Route
          path="n/:noteId"
          element={
            <Modal content={<NoteDetail />} onClose={handleCloseModal} />
          }
        />
      </Routes>
    </div> )
};
