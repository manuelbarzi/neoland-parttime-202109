export default function Modal ({ content, onClose }) {
    const handleClickOnModal = event => {
        onClose()
    }
    const handleClickOnContent = event => {
        event.stopPropagation()
    }

    return (
    <>
        <div onClick={handleClickOnModal}>
        <button onClick={onClose}>X</button>
        <div onClick={handleClickOnContent}>{content}</div>
        </div>
    </>
)
}