

function Day({ day, changeDay }){



    return (
        <div>              
            <div onClick={()=> changeDay({day})}><p> {day} </p></div>         
        </div>
    )
}

export default Day