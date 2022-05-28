import './Quiz.css'
import InputRadioQuiz from './InputRadioQuiz'
import InputCheckboxQuiz from './InputCheckboxQuiz'
import {updateUser, retrieveUser} from '../logic'

function Quiz({goToHome}) {

    const onQuiz = event=>{
        event.preventDefault()

        retrieveUser()

        updateUser()
    }

    return <div>
        <form className='quiz__form' onSubmit={event=> {
            event.preventDefault()

            const hairTexture = event.target.hairTexture.value

            console.log(hairTexture, event.target)
        }}>
            <fieldset className="quiz__fieldset quiz__fieldset-hairtexture">
                <p>Tell us your type of hair and let us help to find what you want quickly</p>
                <InputRadioQuiz name='interest' value='3A' text='3A'/>
                <InputRadioQuiz name='interest' value='3B' text='3B'/>
                <InputRadioQuiz name='interest' value='3C' text='3C'/>
                <InputRadioQuiz name='interest' value='4A' text='4A'/>
                <InputRadioQuiz name='interest' value='4B' text='4B'/>
                <InputRadioQuiz name='interest' value='4C' text='4C'/>                  
            </fieldset>
            <fieldset className="quiz__fieldset quiz__fieldset-interests">
                <p>What would you like for your hair?</p>
                <InputCheckboxQuiz value='moisture' text='Moisture'/>
                <InputCheckboxQuiz value='growth' text='Growt'/>
                <InputCheckboxQuiz value='restore' text='Restore'/>
                <InputCheckboxQuiz value='definition' text='Definition'/>
                <InputCheckboxQuiz value='strength' text='Strength'/>
            </fieldset>
            <button onClick={goToHome}>Do It Later</button>
            <button type='submit' onSubmit={onQuiz}>Next</button>
        </form>
    </div>
}

export default Quiz