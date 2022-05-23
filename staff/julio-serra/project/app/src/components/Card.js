import React from 'react'

export default function Card({ imageUrl, title, text, url }) {
    return (
        <section className='bg-slate-300 pb-10'>
            <cards className="bg-white rounded-2xl">
                <picture className="flex justify-center"><img src={imageUrl} alt='' /></picture>
                <h1 className="nav__font black text-xl">{title}</h1>
                <div className='cards__description'>
                    {text ? text
                    : 'Add text...'}
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