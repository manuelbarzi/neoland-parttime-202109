function Fav (props){
    return <span onClick={props.onClick}>{props.selected? '❤️': '🤍'}</span>
}

