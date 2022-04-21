import './Modal.css'

export default ({ content, onClose }) => {
    const handleClickOnModal = event => {
        onClose()
    }

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