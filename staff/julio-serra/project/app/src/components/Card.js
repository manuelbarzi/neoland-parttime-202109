import React from 'react'
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
                    <span><a href="spaces">Visit the list</a></span>
                </div>
            </section>
        </>
    )
}