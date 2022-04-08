import './Modal.css'
function Modal({ content, onClose }) {
    //click fuera del contenido del modal
    const handleClickOnModal = event => {
        onClose()
    }
    
    //click dentro del contenido del modal
    const handleClickOnContent = event => {
        event.stopPropagation()
    }

    return <div className="Modal" onClick={handleClickOnModal}>
        <button onClick={onClose}>X</button>

        <div onClick={handleClickOnContent}>
            {content}
        </div>
    </div>
}
export default Modal