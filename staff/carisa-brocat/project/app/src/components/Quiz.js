import './Quiz.css'
import InputRadioQuiz from './InputRadioQuiz'
import InputCheckboxQuiz from './InputCheckboxQuiz'
import { updateUserHairTextureAndInterests } from '../logic'
import { errors } from 'commons'
const { AuthError, NotFoundError } = errors

function Quiz({ onQuizPassed }) {

    const onQuiz = event => {
        event.preventDefault()

        const { target: { hairTexture: { value: hairTexture }, interests } } = event

        const interestsArray = []

        interests.forEach(interest => {
            if (interest.checked) {
                interestsArray.push(interest.value)
            }
        })

        try {
            updateUserHairTextureAndInterests(sessionStorage.token, hairTexture, interestsArray)
                .then(() => {
                    onQuizPassed()
                })
                .catch(error => {
                    if (error instanceof NotFoundError && error.message.includes('user') && error.message.includes('not found'))
                        delete sessionStorage.token

                    alert(error.message)
                })
        } catch (error) {
            if (error instanceof AuthError)
                delete sessionStorage.token

            alert(error.message)
        }
    }

    const skipQuiz = event => {
        event.stopPropagation()

        try {
            updateUserHairTextureAndInterests(sessionStorage.token, "", [])
                .then(() => {
                    onQuizPassed()
                })
                .catch(error => {
                    alert(error.message)
                })
        } catch (error) {
            alert(error.message)
        }
    }

    return <div>
        <form className='quiz__form' onSubmit={onQuiz}>
            <fieldset className="quiz__fieldset quiz__fieldset-hairtexture">
                <p className='quiz__fieldset--header'>Tell us your type of hair and let us help to find what you want quickly</p>
                <div className='quiz__fieldset--main quiz__fieldset--main-hairTexture'>
                    <InputRadioQuiz name='hairTexture' value='3a' text='3A' />
                    <InputRadioQuiz name='hairTexture' value='3b' text='3B' />
                    <InputRadioQuiz name='hairTexture' value='3c' text='3C' />
                    <InputRadioQuiz name='hairTexture' value='4a' text='4A' />
                    <InputRadioQuiz name='hairTexture' value='4b' text='4B' />
                    <InputRadioQuiz name='hairTexture' value='4c' text='4C' />
                </div>
            </fieldset>
            <fieldset className="quiz__fieldset quiz__fieldset-interests">
                <p className='quiz__fieldset--header'>What would you like for your hair?</p>
                <div className='quiz__fieldset--main quiz__fieldset--main-interests'>
                    <InputCheckboxQuiz name='interests' value='moisture' text='Moisture' />
                    <InputCheckboxQuiz name='interests' value='growth' text='Growt' />
                    <InputCheckboxQuiz name='interests' value='restore' text='Restore' />
                    <InputCheckboxQuiz name='interests' value='definition' text='Definition' />
                    <InputCheckboxQuiz name='interests' value='strength' text='Strength' />
                </div>
            </fieldset>
            <div className='quiz__form--foot'>
                <button onClick={skipQuiz}>Do It Later</button>
                <button type='submit'>Next</button>
            </div>
        </form>
    </div>
}

export default Quiz