import './Quiz.css'

function InputCheckboxQuiz ({name, value, text}){
    return <div className='quiz__button quiz__button--interests'>
    <label >
        <input type='checkbox' name={name} value={value} />
        <span>{text}</span>
    </label>
</div>
}

export default InputCheckboxQuiz