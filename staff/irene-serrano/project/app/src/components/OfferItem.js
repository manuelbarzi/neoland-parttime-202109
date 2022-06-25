export default function ({content}){
    return <>
        <h3 className="Company__itemTitle">{content.title}</h3>
        <p className="Company__itemStack" >{content.stack}</p>
        <p className="Company__itemLocation">{content.location}</p>

    </>

}