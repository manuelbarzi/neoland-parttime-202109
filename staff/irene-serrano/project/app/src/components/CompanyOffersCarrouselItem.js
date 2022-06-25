import './Company.css'

export default function ({ content }) {
    return <>
        <h3 className='item__title'>{content.title}</h3>
        <p className='item__stack'>{content.stack}</p>
    </>

}