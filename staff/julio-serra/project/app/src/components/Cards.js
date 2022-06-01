import { useEffect, useState } from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { retrieveAllSpaces } from '../logic';
import CartItem from './CartItem';

export default function Cards() {

    const [spaces, setSpaces] = useState();

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


    return (

        <>
            <h1 className='nav__font black text-4xl'>Our Spaces</h1>
            <div>
                {spaces ? spaces.map(space => {
                    return <li key={space.id}>
                        <CartItem content={space} />
                    </li>
                })
                    : <p>Not found spaces</p>
                }
            </div>
        </>
    )
}