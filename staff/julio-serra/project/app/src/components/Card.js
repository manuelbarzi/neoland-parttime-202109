import React from 'react'

const FEATURE2ICON = {
    'dj': 'headphones-icon',
    'audio': 'speaker'
}

export default function Card({ imageUrl, title, text, url, features }) {
    return (
        <section className='bg-slate-300 pb-10 h-full'>
            <cards className="bg-white rounded-2xl">
                <picture className="flex justify-center"><img src={imageUrl} alt='' /></picture>
                <h1 className="nav__font black text-xl">{title}</h1>
                <div className='cards__text'>
                    {text ? text
                    : 'Add text...'}
                </div>
                <div>
                    {features.map(feature => <span className={FEATURE2ICON-[feature]}></span>)}
                </div>
                <div className='cards__price'>
                    <span>Precio tachado</span>
                    <span>Precio con rebaja</span>
                </div>
                <a href={
                    url ? url : '#'}>View Listing</a>
            </cards>
        </section>
    )
}