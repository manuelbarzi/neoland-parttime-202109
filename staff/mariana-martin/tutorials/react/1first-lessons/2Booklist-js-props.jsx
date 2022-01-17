//PROPS

//un sólo componente con return ahí mismo del titulo, author e imagen, (es cuestión de gustos)

//USANDO JAVASCRIPT, (usamos curly braces y escribimos javascript title es la variable)
//las variables irán fuera o dentro de la función depende...

//setup variables:
const firstBook = {
img: "https://images-na.ssl-images-amazon.com/images/I/91Q9eneR7BL._AC_UL604_SR604,400_.jpg",
title: 'The Grinch',
author: 'Dr. Seuss'
}

//hago segundo book porque quiero valores diferentes
const secondBook = {
    img: "https://images-na.ssl-images-amazon.com/images/I/91DNhLLmUOL._AC_UL604_SR604,400_.jpg",
    title: 'Atlas of the Heart',
    author: 'Brené Brown'
    }



function Booklist(){
    return (
        <section className='booklist'>   

                {/* //pasamos las props, propiedad y valor aquí  donde renderizamos */}
            <Book img={ firstBook.img } title={ firstBook.title } author={ firstBook.author }/> 

            <Book img={ secondBook.img } title={ secondBook.title } author={ secondBook.author }/>         

       </section>
    )
}
//PROPS
//book compnente que es una función, vamos a cambiar los valores de cada libro y sean diferentes, para eso usamos como parametro props:
const Book = (props) => {  //aquí acceso a las props
    console.log(props)  //vemos que es un objeto, y vamos a pasarle las props a donde se renderiza este componente


    //accedemos a la prop y luego al valor de esa prop: titulom ato, imagen:
    return <article className='book'>
     <img src={ props.img} alt=""/>
     <h1>{ props.title }</h1>  
     <h4>{ props.author }</h4> 
    
     
    </article>
}

