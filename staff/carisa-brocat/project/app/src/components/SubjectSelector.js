import './SubjectSelector.css'
import { useState } from 'react'


export default () => {
    const [selected, setSelected] = useState('')

    const handleSelected = (subject) => {
        setSelected(subject)
    }

    return <div className="subject">
        <div className={`${selected === '' ? 'subject__button subject__button--selected' : 'subject__button'}`} onClick={() => handleSelected('')} >All</div>
        <div className={`${selected === 'moisture' ? 'subject__button subject__button--selected' : 'subject__button'}`} onClick={() => handleSelected('moisture')} >Most</div>
        <div className={`${selected === 'definition' ? 'subject__button subject__button--selected' : 'subject__button'}`} onClick={() => handleSelected('definition')} >Def</div>
        <div className={`${selected === 'restore' ? 'subject__button subject__button--selected' : 'subject__button'}`} onClick={() => handleSelected('restore')} >Rest</div>
        <div className={`${selected === 'growth' ? 'subject__button subject__button--selected' : 'subject__button'}`} onClick={() => handleSelected('growth')} >Grow</div>
        <div className={`${selected === 'strength' ? 'subject__button subject__button--selected' : 'subject__button'}`} onClick={() => handleSelected('strength')} >Stre</div>
    </div>
}
