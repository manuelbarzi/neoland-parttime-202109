import { useEffect } from 'react'
import './Feedback.css'

export default ({ level, message, onTimeout }) => {
    useEffect(() => {
        setTimeout(onTimeout, 2000)
    }, [])

    return <div className={`Feedback Feedback--${level}`}>{message}</div>
}