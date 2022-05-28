import './Quiz.css'

function InputCheckboxQuiz ({value, text}){
    return <div className='quiz__button quiz__button--interests'>
    <label >
        <input type='checkbox' name={value} value={value} />
        <span>{text}</span>
    </label>
</div>
}

export default InputCheckboxQuiz