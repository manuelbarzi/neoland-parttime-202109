import { useEffect, useState } from 'react'
import { retrieveLattestSpaces } from '../logic';
import CardItem from './CardItem';
import { useNavigate, Route, Routes } from 'react-router-dom'

export default function Cards({ items }) {

    const navigate = useNavigate()
    const [spaces, setSpaces] = useState()

    useEffect(() => {
        getLattestSpaces()
    }, [])

    const getLattestSpaces = () => {
        try {
            retrieveLattestSpaces()
                .then(spaces => {
                    setSpaces(spaces)
                })
        } catch (error) {
            alert({ error: error.message })
        }
    }

    return (

        <>
            <section className='bg-color-spaces pb-20'>
                <div className='flex justify-between items-center pr-16'>
                    <h1 className='nav__font black text-4xl py-8 pl-14'>The Lattest Spaces...</h1>
                </div>
                <div className='grid grid-cols-3'>
                    {spaces ? spaces.map(space => {
                        return <li className='list-none justify-center mb-10' key={space.id}>
                            <CardItem space={space} />
                        </li>
                    })
                        : <p>Not found spaces</p>
                    }

                </div>

            </section>
        </>
    )
}