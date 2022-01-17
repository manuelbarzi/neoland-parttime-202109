function Cart({selectedcart, onClickCart}){
    return <span className='cart' onClick={onClickCart} >{selectedcart ? '✔️' : '🛒' }</span>
    } 