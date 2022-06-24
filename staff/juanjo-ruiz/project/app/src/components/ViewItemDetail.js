import { useState, useEffect } from "react"

export default function ({ content }) {
    const [title, setTitle] = useState()

    useEffect(() => {
        if (content.title === 'imageLead')
            setTitle('Parte delantera')
        else if (content.title === 'imageRear')
            setTitle('Parte trasera')
        else if (content.title === 'imageRight')
            setTitle('Parte derecha')
        else if (content.title === 'imageLeft')
            setTitle('Parte izquierda')
    })

    return <div>
        <h3>{title}</h3>
        <img src={content.image} />
    </div>
}