import React from 'react'
import Card from './Card'
import image1 from '../assets/img/image1.jpg'
import image2 from '../assets/img/image2.jpg'

const cards = [
    {
        id: 1,
        title: "Titulo 1",
        image: image1,
        url: "https://google.es",
        features: ['dj', 'audio', 'lights'],
        text: "Lorem ipsum dolor sit amet consectetur, Lorem ipsum dolor sit amet consectetur, Lorem ipsum dolor sit amet consectetur"
    },
    {
        id: 2,
        title: "Titulo 2",
        image: image2,
        url: "https://tesla.com",
    }
]


export default function Cards() {
    return (
        <>
        <h1 className='nav__font black text-4xl'>Our Spaces</h1>
        <div className="grid grid-cols-2 gap-10 my-10">
            {cards.map(({ title, image, url, id, text, features}) => (
                <div key={id}>
                    <Card imageUrl={image} title={title} url={url} text={text} features={features} />
                </div>
            ))}
        </div>
        </>
    )
}