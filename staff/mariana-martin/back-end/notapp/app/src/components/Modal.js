import './Modal.css'

export default ({ content, onClose}) => {
    const handleClickOnModal = event => {
     onClose()
 }

 const handleClickOnContent = event => {
     event.stopPropagation() //hace que no siga al padre
 }
                                 //onClick en todo el modal (por fuera) no en el div del contenido (donde escribes notas)
 return <div className="Modal" onClick={handleClickOnModal}> 
     <button className="button" onClick={onClose}>x</button>
     <div onClick={handleClickOnContent}>  
         {content}
     </div>
 </div>

}
