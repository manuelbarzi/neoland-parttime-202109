import { useEffect } from "react"

export default function ({ level, message, onTimeout }) {

    useEffect(() => {
        setTimeout(onTimeout, 2000)
    }, [])

    return <div>{message}</div>
}