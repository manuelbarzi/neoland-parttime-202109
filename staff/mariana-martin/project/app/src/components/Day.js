function Day({ day, onDayClicked }){
    return (
        <div>              
            <div onClick={()=> onDayClicked(day)}><p> {day} </p></div>         
        </div>
    )
}

export default Day