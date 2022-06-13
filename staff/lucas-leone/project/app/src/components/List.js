import Section from "./Section"


export default function ({ list: { name, date, description, sections } }) {



    return <div >
        <h1>{name}</h1>
        <p>{description}</p>
        {sections ? sections.map(section => <div>
            <Section section={section} />
        </div>) : <p>no sections</p>}
        <time>{date.toDateString()}</time>

    </div>


}