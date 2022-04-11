import './Note.css'

export default function ({ onItemClick,onItemDelete, note: { id, text, color, date, userId, userName } }) {

    const goToItem = id => {
        onItemClick(id)
    }

    const deleteNote = id => {
        onItemDelete(id)
    }

    return <div onClick={() => goToItem(id)} className={`Note Note--${color}`}>
        <p className="Note__text">{text}</p>
        <div className="Note__footer">
            <img src="https://icons-for-free.com/iconfiles/png/512/cross+delete+icon-1320196393721642367.png" className="Note__delete" onClick={() => deleteNote(id)} />
            <strong>{userName}</strong> <time>{date.toDateString()}</time>
        </div>
    </div>
}

