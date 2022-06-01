import { useState } from 'react';
import { MusicNoteIcon, VolumeUpIcon, BellIcon, LightBulbIcon, ShieldCheckIcon } from '@heroicons/react/solid'
import { useNavigate, Routes, Route } from 'react-router-dom';
import Space from './Space'

export default function CartItem({ content }) {

    const [features, setFeatures] = useState(content.features)
    const navigate = useNavigate()
    return (
        <>
            <section>
                <img src={content.image} />
                <p>{content.title}</p>
                <p>{content.description}</p>
                <p>{content.price}</p>
                <p>{content.sizeDetail}</p>
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
                <button>View listing</button>
            </section>

                    <Routes>
                        <Route path="/spaces/:spaceId" element={<Space />} />
                    </Routes>

        </>
    )
}