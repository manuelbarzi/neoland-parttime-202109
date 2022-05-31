import React from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
export default function Card({ image, title, price, text, features, dto, off, url }) {

    return (
        <>
            <section>
                <div>
                    <img height="200" src={image} />
                    <p className=''>{title}</p>
                    <p>{text}</p>
                    <p className='line-through'>{price}</p>
                    <p>{dto} {off}</p>
                    <p className='flex'>{features}</p>
                    <Routes>
                        <Route path='/*'/>
                    </Routes>
                    <span><a href={url}>Visit the list</a></span>
                </div>
            </section>
        </>
    )
}