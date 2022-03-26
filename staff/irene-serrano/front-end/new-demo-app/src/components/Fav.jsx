function Fav({ selected, onClick }) {

    return <span  className="fav selectable result-fav" onClick={onClick}>{selected ?  "★": "☆"}</span>
}
export default Fav