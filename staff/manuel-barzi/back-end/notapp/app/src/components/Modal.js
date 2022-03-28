import './Modal.css'

export default ({content, onClose}) => {
    return <div className="Modal">
            <button onClick={onClose}>X</button>
        {content}
    </div>
}

