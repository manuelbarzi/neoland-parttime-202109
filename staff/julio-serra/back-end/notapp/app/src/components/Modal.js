
export default function Modal({ content, onClose }) {
    const handleClickOnModal = event => {
        onClose()
    }
    const handleClickOnContent = event => {
        event.stopPropagation()
    }

    return (
        <>
            <section className="w-full">
                <div className="absolute h-100 top-0 h-screen w-screen flex flex-col bg-black/70 items-center justify-center" onClick={handleClickOnModal}>
                    <button onClick={onClose}>
                        <span className="text-red-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                            </svg>
                        </span>
                    </button>
                    <div onClick={handleClickOnContent}>
                        {content}
                        </div>
                </div>
            </section>
        </>
    )
}