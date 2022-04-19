import './Modal.css'
import { useEffect, useState } from 'react'
import { useScrollBlock } from '../hooks'

export default ({ content, onClose }) => {
    const [top, setTop] = useState()
    const [blockScroll, allowScroll] = useScrollBlock()

    useEffect(() => {
        setTop(window.pageYOffset)

        blockScroll()

        return () => allowScroll()
    }, [])

    const handleClickOnContent = event => {
        event.stopPropagation()
    }

    const handleClose = () => {
        allowScroll()

        onClose()
    }

    return <div className="Modal" style={{ top }} onClick={handleClose}>
        <button className="Modal__closeButton" onClick={handleClose}>x</button>
        <div onClick={handleClickOnContent}>
            {content}
        </div>
    </div>
}

