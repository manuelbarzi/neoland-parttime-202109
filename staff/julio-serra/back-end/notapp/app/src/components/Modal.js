import { useEffect, useState } from 'react'
import { useScrollBlock } from '../hooks'

export default function Modal({ content, onClose }) {

    const [top, setTop] = useState(0)
    const [blockScroll, allowScroll] = useScrollBlock()

    useEffect(() => {
        setTop(window.pageYOffset)

        blockScroll()
    }, [])

    const handleClickOnContent = event => {
        event.stopPropagation()
    }

    const handleClose = () => {
        allowScroll()

        onClose()
    }

    return <section className="w-full top" onClick={handleClose}>
        <div className="left-0 absolute top-0 h-screen w-screen flex flex-col bg-black/70 items-center justify-center" onClick={handleClose}>
            <button onClick={handleClose} className="absolute right-0 top-0 p-2">
                <span className='text-white'>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
</svg>
                </span>
            </button>
            <div onClick={handleClickOnContent}>
                {content}
            </div>
        </div>
    </section>
}