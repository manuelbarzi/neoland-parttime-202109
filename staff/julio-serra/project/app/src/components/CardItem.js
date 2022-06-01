import { useState, useEffect } from 'react';
import { MusicNoteIcon, VolumeUpIcon, BellIcon, LightBulbIcon, ShieldCheckIcon } from '@heroicons/react/solid'
import { useNavigate, Routes, Route, useParams } from 'react-router-dom';

export default function CardItem({ space }) {

    const [features, setFeatures] = useState(space.features)
    const navigate = useNavigate()

    const handleSpaceClick = () => navigate(`spaces/${space.id}`)

    return (
        <>
            <section>
                <img src={space.image} />
                <p>{space.title}</p>
                <p>{space.description}</p>
                <p>{space.price}</p>
                <p>{space.sizeDetail}</p>
                <div className='flex'>
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
                    }) : <span>Add your features</span>}
                </div>
                <button onClick={handleSpaceClick}>View listing</button>
            </section>

        </>
    )
}