//EVENT BASIC
const books = [

    {   id: 1,
        img: "https://images-na.ssl-images-amazon.com/images/I/91Q9eneR7BL._AC_UL604_SR604,400_.jpg",
        title: 'The Grinch',
        author: 'Dr. Seuss'
    }
    ,
    {   id: 2,
        img: "https://images-na.ssl-images-amazon.com/images/I/91DNhLLmUOL._AC_UL604_SR604,400_.jpg",
        title: 'Atlas of the Heart',
        author: 'Brené Brown'
    }
    ,
    {   id: 3,
        img: "https://images-na.ssl-images-amazon.com/images/I/71EwoNQypZL._AC_UL604_SR604,400_.jpg",
        title: 'It Ends with Us',
        author: 'Colleen Hoove'
    }

]


function Booklist(){
    return ( 
        <section className='booklist'>    
                           
        {books.map((book) => {
            const { img, title, author } = book  
            return (
            <Book key={book.id} { ...book }> </Book>  
            )                  
        })}
       </section>
    )
}

//setup an event:

const Book = ( {img, title, author }) => {   
    //attribute, eventHandler, with camelCase
    //el atributo es onClick,  eventHandler es clickHandler
    //1 evento onClick, 2 evento onMouseOver en el article
    
    const clickHandler = () => {
        
        alert('hello world');
    };
                       
    
    //en este función(event handler), como estoy pasando argumentos, se ejecutará/renderizará automáticamente cuando se invoque (linea 65) y eso no queremos 
    const complexExample = (author) => {
        console.log(author) //console log como ejemplo
    }

    return <article className='book' onMouseOver={() => {
        console.log(title)
    }}>



     <img src={ img} alt=""/>
     {/* //ejemplo de inline functión: como ejemplo al darle click al title, en consola se mostrará el title */}
     <h1 onClick={() => console.log(title)}>{ title }</h1>              
     <h4>{ author }</h4> 
                                    {/* //aquí tenemos referencia de evento /función */}
    <button type='button' onClick={clickHandler}> Refrence Example </button> 


    <button type='button' onClick={() => complexExample(author)}> More Complex Example </button> 
                                    {/* //aquí invocamos esta función con args al momento que corre la aplicación y eso no queremos */}
                                    {/* //así que cuando invocamos una función con args, es necesario usar arrow function, no sólo pasar los args así NO: onClick={complexExample(author)} */}

    </article>
}

