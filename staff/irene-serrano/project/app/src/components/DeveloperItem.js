import './lists.css'
export default function ({ content }) {
    return <>
        <h3 className='Developer__itemTitle'>{content.name}</h3>
        <p className='Developer__itemStack'>{content.stack}</p>
        <p className='Developer__itemDescription'>{content.description}</p>
        <p className='Developer__itemLocation '>{content.location}</p>

    </>

}