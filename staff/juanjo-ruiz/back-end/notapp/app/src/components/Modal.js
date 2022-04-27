import './Modal.css'

export default ({ content, onClose }) => {
    const handleCLickOnModal = event => {
        onClose()
    }

    const handleClickOnContent = event => {
        event.stopPropagation()
    }

    return <div className="Modal" onClick={handleCLickOnModal}>
        <button onClick={onClose}>X</button>
        <div onClick={handleClickOnContent}>
            {content}
        </div>
    </div>
}