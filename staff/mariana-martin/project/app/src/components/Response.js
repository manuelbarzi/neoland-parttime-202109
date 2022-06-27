import './styles/Response.css'
import { useEffect } from 'react'

export default ({ level, message, onTimeout }) => {
    useEffect(() => {
        setTimeout(onTimeout, 2000)
    }, [])

    return <div className={`Response Response--${level}`}>{message}</div>
}