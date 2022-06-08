import { useState, useEffect } from 'react';
import { MusicNoteIcon, VolumeUpIcon, BellIcon, LightBulbIcon, ShieldCheckIcon, ArrowsExpandIcon, ClockIcon } from '@heroicons/react/solid'
import { useNavigate, Routes, Route, useParams } from 'react-router-dom';
import { Tooltip } from 'flowbite-react'




export default function CardItem({ space }) {

    const [features, setFeatures] = useState(space.features)
    const navigate = useNavigate()

    const handleSpaceClick = () => navigate(`/spaces/${space.id}`)


    return (
        <>
            <section className='grid gap-3 bg-white w-10/12 mx-auto rounded-xl pb-10 h-full'>
                <img className='my-5 w-11/12 object-cover mx-auto' style={{ height: "200px" }} src={space.image} />
                <container className="px-7 grid gap-4">
                    <h1 className='nav__font black text-4xl'>{space.title}</h1>
                    <p>{space.description}</p>
                    <div className='flex gap-3'>
                        <span className='flex items-center gap-1'>
                            <Tooltip content={<span>Space size</span>}>
                                <ArrowsExpandIcon className="h-5 w-5 text-blue-500" />
                            </Tooltip>
                            {space.size}<sup>2</sup>
                        </span>
                        <span className='flex items-center gap-1'>
                            <Tooltip content={<span>Reservation time</span>}>
                                <ClockIcon className="h-5 w-5 text-blue-500" />
                            </Tooltip>
                            {space.time}
                        </span>

                    </div>
                    <div className='flex items-center gap-3'>
                        <span className='font-bold'>Features</span>
                        {features ? features.map(feature => {
                            if (feature === 'dj') {
                                return <Tooltip content={<span>Dj Included</span>}>
                                    <MusicNoteIcon className="h-5 w-5 text-blue-500" />
                                </Tooltip>
                            } else if (feature === 'wc') {
                                return <Tooltip content={<span>Bathrooms Included</span>}>
                                    <BellIcon className="h-5 w-5 text-blue-500" />
                                </Tooltip>
                            } else if (feature === 'audio') {
                                return <Tooltip content={<span>Dj Included</span>}>
                                    <VolumeUpIcon className="h-5 w-5 text-blue-500" />
                                </Tooltip>
                            } else if (feature === 'lights') {
                                return <Tooltip content={<span>Illumination Included</span>}>
                                    <LightBulbIcon className="h-5 w-5 text-blue-500" />
                                </Tooltip>
                            } else if (feature === 'security') {
                                return <Tooltip content={<span>Security Included</span>}>
                                    <ShieldCheckIcon className="h-5 w-5 text-blue-500" />
                                </Tooltip>
                            } else
                                return null
                        }) : <span>Not found</span>}
                    </div>

                    <span className='line-through'>{space.oldPrice}</span>
                    <span className='text-secondary-color font-bold'>{space.price}</span>

                    <button onClick={handleSpaceClick} className='w-7/12 mx-auto p-4 rounded-md text-secondary-color border-secondary-color border-2 hover:border-cuartiary-color hover:text-cuartiary-color'>View listing &gt;</button>
                </container>
            </section>

        </>
    )
}