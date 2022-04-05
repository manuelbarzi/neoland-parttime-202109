import './Note.css'

export default ({ note: { id, text, color, date, userId, userName } }) => <div className={`Note Note--${color}`}>
    <p>{text}</p>
    <div className="Note__footer">
        <strong>{userName}</strong>, <time>{date.toDateString()}</time>
    </div>
</div>