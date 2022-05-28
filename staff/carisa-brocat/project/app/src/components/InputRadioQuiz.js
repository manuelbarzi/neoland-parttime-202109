import './Quiz.css'

function InputRadioQuiz ({name, value, text}){
    return <div className='quiz__button quiz__button--hairTexture'>
    <label >
        <input type='radio' name={name} value={value} />
        <span>{text}</span>
    </label>
</div>
}

export default InputRadioQuiz