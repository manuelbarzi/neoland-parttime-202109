import './Note.css'

export default ({ note: { id, text, color, date, userId, userName } }) => 
    <div className={`Note h-52 w-52 px-6 Note--${color}`}>
        <p>{text}</p>
        <p>{userName}</p> 
        <span><time>{date.toDateString()}</time></span>
    </div>
