import Header from './Header';
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { retrieveSpace } from '../logic'
import { MusicNoteIcon, VolumeUpIcon, BellIcon, LightBulbIcon, ShieldCheckIcon } from '@heroicons/react/solid'


export default function Space() {
    const [space, setSpace] = useState()
    const params = useParams()
    const { spaceId } = params

    useEffect(() => {
        try {
            retrieveSpace(spaceId)
                .then(space => {
                    setSpace(space)
                })
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }, [spaceId])


    return (
        <>
            <Header />
            {space && <>
                <img className='w-full' src={space.image} />
                <p>{space.title}</p>
                <p>{space.description}</p>
                <p>{space.price}</p>
                <p>{space.features}</p>
                <p>{space.type}</p>
                <p>{space.deposit}</p>
                <p>{space.size}</p>
                <p>{space.access}</p>


            </>}

        </>
    )
}