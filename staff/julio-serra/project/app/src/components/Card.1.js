import React from 'react'
import { MusicNoteIcon, VolumeUpIcon, BellIcon, LightBulbIcon, ShieldCheckIcon } from '@heroicons/react/solid'

const features = {
    dj: <MusicNoteIcon className="h-5 w-5 text-blue-500" />,
    audio: <VolumeUpIcon className="h-5 w-5 text-blue-500" />,
    wc: <BellIcon className="h-5 w-5 text-blue-500" />,
    lights: <LightBulbIcon className="h-5 w-5 text-blue-500" />,
    security: <ShieldCheckIcon className="h-5 w-5 text-blue-500" />
}

export default function Card({ imageUrl, title, text, url, price, dto, priceBefore }) {


    return (
        <section className='bg-slate-300 pb-10 h-full'>
            <cards className="bg-white rounded-2xl">
                <picture className="flex justify-center"><img src={imageUrl} alt='' /></picture>
                <h1 className="nav__font black text-xl">{title}</h1>
                <div className='cards__text'>
                    {text ? text
                        : 'Add text...'}
                </div>
                <div className='cards__features flex items-center'>
                    <span className='font-bold'>Features</span>
                    {features.dj}
                    {features.wc}
                    {features.audio}
                    {features.lights}
                    {features.security}

                    {/* {features ? features?.map(feature => {
                        if (feature === 'dj') {
                            return { dj }
                        } else if (feature === 'audio') {
                            return <VolumeUpIcon className="h-5 w-5 text-blue-500" />
                        } else
                            return <MicrophoneIcon className="h-5 w-5 text-blue-500" />
                    }
                    ) : <span>Add your features</span>} */}
                </div>
                <div className='cards__price'>
                    <span className='line-through'>{priceBefore}</span>
                    <div className='gap-4 flex'>
                        <span>{price}</span>
                        <span>{dto}</span>
                    </div>
                </div>
                <a href={
                    url ? url : '#'}>View Listing</a>
            </cards>
        </section>
    )
}