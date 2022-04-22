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
  const toggleView = (event) => {
   

    const target = event.target.name;

   if( view !== target ) setView(target)
   
  //  view !== target ? setView(target) : null;
   
  };

  //sessionStorage.token ? getUser() : setFeedback('Please sign up')

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

{ view === 'allNotes' ? (
      <div className="Home__tabs">
   
     <div className="Home__tabTags">
     <a onClick={toggleView} className="Home__tabTagItem Home__tabTagItem-selected" name="allNotes">
       All notes
     </a>
     <a onClick={toggleView} className="Home__tabTagItem" name="userNotes">
       Only mines
     </a>
   </div>

   <div className="Home__tabContent">
          <Feed refresh={refresh} view={view} />
        </div>
      </div>
   ) : 
    view === 'userNotes' ? (
      <div className="Home__tabs">
   
     <div className="Home__tabTags">
     <a onClick={toggleView} className="Home__tabTagItem " name="allNotes">
       All notes
     </a>
     <a onClick={toggleView} className="Home__tabTagItem Home__tabTagItem-selected" name="userNotes">
       Only mines
     </a>
   </div>

   <div className="Home__tabContent">
      <Feed refresh={refresh} view="userNotes" />
        </div>
      </div>
    ): <h3>UPS!</h3>
   
  }
        

        

      {modal && (
        <Modal
          content={<CreateNote onCreated={handleCloseModalAndReloadNotes} />}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};
