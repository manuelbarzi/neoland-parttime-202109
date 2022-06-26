import { useState, useEffect } from "react"

export default function ({ content }) {
    const [title, setTitle] = useState()

    useEffect(() => {
        if (content.side === 'lead')
            setTitle('Parte delantera')
        else if (content.side === 'rear')
            setTitle('Parte trasera')
        else if (content.side === 'right')
            setTitle('Parte derecha')
        else if (content.side === 'left')
            setTitle('Parte izquierda')
    }, [])


    return <div>
        <h4>{title}</h4>
        <p>{content.newDate}</p>
        <p>{content.state}</p>
    </div>
}