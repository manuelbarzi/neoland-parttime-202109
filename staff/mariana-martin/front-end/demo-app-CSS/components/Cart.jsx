function Cart({selected, onClickedCart}){
    return <span className='cart' onClick={onClickedCart} >{selected? '✔️' : '🛒' }</span>
    } 