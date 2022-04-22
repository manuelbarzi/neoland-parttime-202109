import { useState, useEffect } from "react";

import Modal from "./Modal";
import Nav from "./Nav";
import CreateNote from "./CreateNote";
import "./Home.css";
import "./Home__tabs.css";
import Feed from "./Feed";

export default ({ onLoggedOut }) => {
  const [modal, setModal] = useState();
  const [refresh, setRefresh] = useState();
  const [view, setView] = useState("allNotes");
  const [user, setUser] = useState();

  const [feedback, setFeedback] = useState();

  const handleLogout = () => {
    delete sessionStorage.token;
    onLoggedOut();
  };

  const handleCloseModal = () => setModal(false);

  const handleOpenModal = () => setModal(true);

  const handleCloseModalAndReloadNotes = () => {
    handleCloseModal();

    setRefresh(true);
  };

  return (
    <div className="Home">
      <Nav onLogout={handleLogout} user={user} />
      {feedback ? <p>{feedback}</p> : null}
      <div className="Home__title">
        <h2>NOTES</h2>
        <button className="title__button" onClick={handleOpenModal}>
          +
        </button>
      </div>
      <div className="Home__tabs">
        <div className="Home__tabContent">
          <Feed refresh={refresh} />
        </div>
      </div>
      )
      {modal && (
        <Modal
          content={<CreateNote onCreated={handleCloseModalAndReloadNotes} />}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};
