import { useState, useEffect } from 'react';
import { MusicNoteIcon, VolumeUpIcon, BellIcon, LightBulbIcon, ShieldCheckIcon, ArrowsExpandIcon, ClockIcon } from '@heroicons/react/solid'
import { useNavigate, Routes, Route, useParams } from 'react-router-dom';




export default function CardItem({ space }) {

    const [features, setFeatures] = useState(space.features)
    const navigate = useNavigate()

    const handleSpaceClick = () => navigate(`spaces/${space.id}`)


    return (
        <>
            <section className='grid gap-3 bg-white w-10/12 mx-auto rounded-xl pb-10'>
                <img className='my-5 w-11/12 object-cover mx-auto' style={{ height: "200px" }} src={space.image} />
                <container className="px-7 grid gap-4">
                    <h1 className='nav__font black text-4xl'>{space.title}</h1>
                    <p>{space.description}</p>
                    <div className='flex gap-3'>
                        <span className='flex items-center gap-1'>
                            <ArrowsExpandIcon className="h-5 w-5 text-blue-500" />
                            {space.size}<sup>2</sup>
                        </span>
                        <span className='flex items-center gap-1'>
                            <ClockIcon className="h-5 w-5 text-blue-500" />
                            {space.time}
                        </span>
                        
                    </div>
                    <div className='flex items-center gap-3'>
                        <span className='font-bold'>Features</span>
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
                    </div>

                    <span className='line-through'>{space.oldPrice}</span>
                    <span className='text-secondary-color font-bold'>{space.price}</span>

                    <button className='w-5/12 mx-auto p-4 rounded-md text-secondary-color border-secondary-color border-2 hover:border-cuartiary-color hover:text-cuartiary-color' onClick={handleSpaceClick}>View listing &gt;</button>            
                </container>
            </section>

        </>
    )
}