import './styles/Sticker.css'

function Sticker({ option, onClick}){

 

    return (
        <div>
            <h3 className="sticker-menu" onClick={onClick}> {option} </h3>
        </div>
    )
}

export default Sticker