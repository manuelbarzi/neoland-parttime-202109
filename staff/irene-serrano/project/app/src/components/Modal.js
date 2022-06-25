import './Modal.css'

export default ({ content, onClose }) => {
  /*  const body = document.querySelector('#root')
    const bodyHeight = body.clientHeight
    const clientWindowHeight = window.innerHeight
    const scroll = window.scrollY

    const getScrolledModal = () => {
        if ((scroll + clientWindowHeight + 20) < bodyHeight) return scroll
        else return (bodyHeight - clientWindowHeight)
    }
    const scrolledModal = getScrolledModal()
*/
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