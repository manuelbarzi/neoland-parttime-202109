// function Fav({ selected, onClick }) {
//     return <span className="fav" onClick={onClick}>{selected ? '💖' : '🤍'}</span>
// }
function Fav(props) {
    return <span className="fav" onClick={props.onClick}>{props.selected ? '💖' : '🤍'}</span>
}

