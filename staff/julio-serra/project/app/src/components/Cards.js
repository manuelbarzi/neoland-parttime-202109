import React from 'react'
import Card from './Card'
import Space from './Space'
import image1 from '../assets/img/image1.jpg'
import image2 from '../assets/img/image2.jpg'
import { MusicNoteIcon, VolumeUpIcon, BellIcon, LightBulbIcon, ShieldCheckIcon } from '@heroicons/react/solid'

export default function Cards() {

    const features = {
        dj: <MusicNoteIcon className="h-6 w-6 text-blue-500" />,
        audio: <VolumeUpIcon className="h-6 w-6 text-blue-500" />,
        wc: <BellIcon className="h-6 w-6 text-blue-500" />,
        lights: <LightBulbIcon className="h-6 w-6 text-blue-500" />,
        security: <ShieldCheckIcon className="h-6 w-6 text-blue-500" />
    }

    return (
        <>
            <h1 className='nav__font black text-4xl'>Our Spaces</h1>
            <div className='grid grid-cols-2 gap-10 my-10'>
                <Card image={image1} text="Photo of monstera plant by Severin Candrian" title="Monstera" price="300€" dto="260€" off="5%" features={[features.dj, features.audio]} url="" />
                <Card image={image2} text="Photo of Peperomia polybotrya plant by Severin Candrian" title="Peperomia Polybotrya" price="250€" dto="190€" off="3%" features={[features.lights, features.security]} url="" />
            </div>
        </>
    )
}