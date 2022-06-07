import Header from './Header';
import Footer from './Footer'
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { retrieveSpace } from '../logic'
import { MusicNoteIcon, VolumeUpIcon, BellIcon, LightBulbIcon, ShieldCheckIcon } from '@heroicons/react/solid'


export default function Space() {
    const [space, setSpace] = useState()
    const params = useParams()
    const { spaceId } = params
    const [features, setFeatures] = useState()

    useEffect(() => {
        try {
            retrieveSpace(spaceId)
                .then(space => {
                    setSpace(space)
                    setFeatures(space.features)
                })
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }, [spaceId])


    return (
        <>
            <Header />
            <section className='mt-5'>
                {space && <>
                    <div>
                        <img className='w-full object-cover' style={{ height: "400px" }} src={space.image} />
                    </div>
                    <div>
                        <h1 className='nav__font black text-4xl'>{space.title}</h1>
                        <p>{space.description}</p>
                        <p>{space.price}</p>
                        <p>
                            {features ? features.map(feature => {
                                if (feature === 'dj') {
                                    return <MusicNoteIcon className="h-5 w-5 text-blue-500" />
                                } else if (feature === 'wc') {
                                    return <BellIcon className="h-5 w-5 text-blue-500" />
                                } else if (feature === 'audio') {
                                    return <VolumeUpIcon className="h-5 w-5 text-blue-500" />
                                } else if (feature === 'lights') {
                                    return <LightBulbIcon className="h-5 w-5 text-blue-500" />
                                } else if (feature === 'security') {
                                    return <ShieldCheckIcon className="h-5 w-5 text-blue-500" />
                                } else
                                    return null
                            }) : <span>Not found</span>}
                        </p>
                    </div>

                    <div>
                        <p>{space.type}</p>
                        <p>{space.deposit}</p>
                        <p>{space.size}</p>
                        <p>{space.access}</p>
                    </div>
                </>}

            </section>
            <Footer />
        </>
    )
}