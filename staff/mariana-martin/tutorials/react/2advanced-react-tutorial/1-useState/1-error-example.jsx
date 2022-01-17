
//Un botón que cambie el nombre del titulo

//Aquí el botón no sirveporque aunque estemos escribiendo la función onclick, no está renderizando nada, poreso no sirve.
const ErrorExample = () => {


    let title = 'random title'
    //función para el onClick, y que me cambie el titulo al clickaear, pero no servirá, si lo vemos en console.log, si cambiará a hello people, pero:
    //la cosa es que no estamos renderizando el component
    const handleClick = () => {
        title = 'hello people'
        console.log(title)
    }
    return <div> 
        {/* //recordar que para acceder a la var necesito curly braces */}
    <h2>{ title }</h2>  
    <button type='button' className='btn' onClick={handleClick}>
        Change Title
    </button>
    </div>
  }