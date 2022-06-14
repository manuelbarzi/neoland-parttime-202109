import './CategorySelector.css'
import { useState } from 'react'


export default ({ onCategorySelected }) => {
    const [selected, setSelected] = useState('')

    const handleSelected = (category) => {
        if (category !== selected) {
            setSelected(category)
        }
        else {
            setSelected('')
            category = ''
        }

        onCategorySelected(category)
    }

    return <div className='category'>
        <div className='category category__left'>
            <div className={`${selected === 'product' ? 'category__button category__button--selected' : 'category__button'}`} onClick={() => handleSelected('product')} >Prod</div>
            <div className={`${selected === 'question' ? 'category__button category__button--selected' : 'category__button'}`} onClick={() => handleSelected('question')} >?</div>
        </div>
        <div className='category category__rigth'>
            <div className={`${selected === 'space' ? 'category__button category__button--selected' : 'category__button'}`} onClick={() => handleSelected('space')} >Spac</div>
            <div className={`${selected === 'other' ? 'category__button category__button--selected' : 'category__button'}`} onClick={() => handleSelected('other')} >Others</div>
        </div>
    </div>
}

