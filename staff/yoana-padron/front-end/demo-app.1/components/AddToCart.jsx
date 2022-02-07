function AddToCart({ selected, onClick }) {
    return <span className="cart" onClick={onClick}>{selected ? '💘' : '🤍'}</span>
}