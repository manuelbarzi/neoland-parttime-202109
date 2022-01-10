//WE ARE REFACTORING 
//PARA EVITAR escribir lo mismo en los componentes de Book, 

//Se hará una const (array) que contenga todos los libros, en vez de tener constante para cada libro.
const books = [

    {
        img: "https://images-na.ssl-images-amazon.com/images/I/91Q9eneR7BL._AC_UL604_SR604,400_.jpg",
        title: 'The Grinch',
        author: 'Dr. Seuss'
    }
    ,
    {
        img: "https://images-na.ssl-images-amazon.com/images/I/91DNhLLmUOL._AC_UL604_SR604,400_.jpg",
        title: 'Atlas of the Heart',
        author: 'Brené Brown'
    }
    ,
    {
        img: "https://images-na.ssl-images-amazon.com/images/I/71EwoNQypZL._AC_UL604_SR604,400_.jpg",
        title: 'It Ends with Us',
        author: 'Colleen Hoove'
    }

]
//Nota en react, no se puede renderizar el objeto por ejemplo en este caso books, no va a renderizar todos los objetos (libros), si no se tiene que acceder a cada 1 ellos
//si no saldrá un error "objects are no valid ..."

function Booklist(){
    return ( 
        <section className='booklist'>    
                            {/* //book es el nombre del parametro que estamos pasando y map nos retorna un nuevo array*/}
                                {/* //el nombre que el ponga al parametro apuntará a cada objeto de la iteración */}
        {books.map((book) => {
            const { img, title, author } = book  //en vez de destructurar cada uno, paso el objeto book como prop y ya tiene ese descrutcuting, en vez de pasar img, title, a cada uno
            return (
            <Book book = { book }> </Book>  // podría pasar las props, una por una img={img} pero en props ya las tenemos destructuradas 
            )                   //y al compo Book, paso como prop book que genero aquí una prop que se llame book, y ese será igual al objeto book que estoy pasando, ese valor tendrá la prop book
        })}                     
                             {/* //se wrappeo el objeto book que apuntaba a cada uno de los objetos de array y lo referencio a la propiedad book que se creo */}
       </section>
    )
}


const Book = ( props ) => { 
   console.log(props)                                 //aquí ponemos props, porque es una prop con un objeto book adentro
   const { img, title, author } = props.book  //accedo a la propiedad que busco, que es propiedad book, dentro de objeto book, y ahi adentro ahora están las propiedades de title, author, imagen
                                            //aquí no estamos desctructurando props sino las propiedades del objeto book
    return <article className='book'>
     <img src={ img} alt=""/>
     <h1>{ title }</h1>             
     <h4>{ author }</h4> 
    
    </article>
}

