function Fav ({ selected, onClick}) {
    return <span className="fav" onClick={onClick}>{selected ? '💘' : '💟'}</span>
}