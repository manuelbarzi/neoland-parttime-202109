import { useEffect, useState } from 'react'
import { retrieveLattestSpaces, findSpaces } from '../logic';
import CardItem from './CardItem';

export default function Cards({ query }) {
    const [spaces, setSpaces] = useState()

    useEffect(() => {
        if (!query)
            try {
                retrieveLattestSpaces()
                    .then(spaces => {
                        setSpaces(spaces)
                    })
            } catch (error) {
                alert({ error: error.message })
            }
        else
            try {
                findSpaces(query)
                    .then(spaces => {
                        setSpaces(spaces)
                    })
                    .catch(error => alert({ error: error.message }))
            } catch (error) {
                alert({ error: error.message })
            }

    }, [query])

    return (

        <>
            <section className='bg-color-spaces pb-20'>
                <div className='flex justify-between items-center pr-16'>
                    <h1 className='nav__font black text-4xl py-8 pl-14'>The Lattest Spaces...</h1>
                </div>
                <div className='grid md:grid-cols-2 xl:grid-cols-3'>
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