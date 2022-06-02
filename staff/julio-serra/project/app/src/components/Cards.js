import { useEffect, useState } from 'react'
import { retrieveAllSpaces } from '../logic';
import CardItem from './CardItem';
import { useNavigate, Route, Routes } from 'react-router-dom'


export default function Cards() {

    const navigate = useNavigate()
    const [spaces, setSpaces] = useState()

    useEffect(() => {
        getAllSpaces()
    }, [])

    const getAllSpaces = () => {
        try {
            retrieveAllSpaces()
                .then(spaces => {
                    setSpaces(spaces)
                })
        } catch (error) {
            alert({ error: error.message })
        }
    }

    const [count, setCount] = useState(2)
 

    return (

        <>
            <h1 className='nav__font black text-4xl'>Our Spaces</h1>
            <div>
                {spaces ? spaces.slice(0, count).map(space => {
                    return <li key={space.id}>
                        <CardItem space={space} />
                    </li>
                })
                    : <p>Not found spaces</p>
                }
            </div>

        </>
    )
}