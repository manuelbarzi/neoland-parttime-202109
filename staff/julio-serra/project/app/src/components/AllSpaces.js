import { useEffect, useState } from 'react'
import { retrieveAllSpaces } from '../logic';
import CardItem from './CardItem';
import Header from './Header';
import Footer from './Footer';
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


    return (

        <>
            <Header />
            <section className='bg-color-spaces pb-20 mt-5'>
                <div>
                    <h1 className='nav__font black text-4xl py-8 pl-14'>All our spaces</h1>
                </div>
                <div className='grid grid-cols-3'>
                    {spaces ? spaces.map(space => {
                        return <li className='mb-10 list-none justify-center' key={space.id}>
                            <CardItem space={space} />
                        </li>
                    })
                        : <p>Not found spaces</p>
                    }
                </div>

            </section>
            <Footer />

        </>
    )
}