import "./UpdateNote.css";
import { updateNote } from "../logic";

export default ({ onUpdated, noteId }) => {
  
console.log(noteId)
  const handleUpdateNote = (event) => {
    event.preventDefault();

    const {
      target: {
        text: { value: text },
        color: { value: color },
        public: { checked: _public },
      },
    } = event;
    console.log(text, color, _public)
    try {
      updateNote(sessionStorage.token, noteId, text, color, _public)
        .then(() =>{
          console.log('updating user, sending data')
          onUpdated()
        } )
        .catch((error) => console.error(error.message));
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="UpdateNote">
      <h3>Update a note</h3>

      <form className="UpdateNote__form" onSubmit={handleUpdateNote}>
        <div className="form__inputset form__inputset-column">
          <label htmlFor="text">Your note text:</label>
          <textarea name="text"></textarea>
        </div>

        <div className="form__inputset form__inputset-column">
          <label htmlFor="text">Pick a color:</label>
          <select name="color">
            <option defaultValue disabled>
              --Choose a color--
            </option>
            <option value="white">white</option>
            <option value="yellow">yellow</option>
            <option value="red">red</option>
            <option value="pink">pink</option>
            <option value="purple">purple</option>
            <option value="blue">blue</option>
            <option value="green">green</option>
          </select>
        </div>

        <div className="form__inputset form__inputset-row">
          <label htmlFor="public">public</label>
          <input id="public" type="checkbox" name="public"></input>
        </div>

        <button className="form__submit">Update</button>
      </form>
    </div>
  );
};
