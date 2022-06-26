

export default ({ content, onClose }) => {

    const handleClickOnModal = () => {
        onClose()
    }

    const handleClickOnContent = event => {
        event.stopPropagation()
    }

    return <div className="Modal" onClick={handleClickOnModal}>
        <button className="Modal__closeButton" onClick={onClose}>✕</button>
        <div onClick={handleClickOnContent}>
            {content}
        </div>
    </div>
}