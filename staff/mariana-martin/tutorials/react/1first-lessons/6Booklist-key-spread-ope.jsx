//Key Prop And Spread Operator 
//¿por qué sale el Warning: Each child in a list should have a unique key prop?
//React quiere trackear que estamos agreagando y quitando, así que neesitamos set up una key prop , para cada item, siempre que tenemos una lista
//puede ser el ID, si trabajoamos con API en la API ya lo tendrá , en este caso lo pondré yo:

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
            <Book key={book.id} { ...book }> </Book>   //otra opción de pasar props es usar spread operator: (no importa cuantas propiedades tenga spread them out as props )
                                                //...book,puntos con el nombre del objeto, donde esparso las propeidades de ese, sin hcer la propiedad de book 
            //colocando la prop key ya no me sladrá en Warning en consola
            )                  
        })}
       </section>
    )
}


const Book = ( {img, title, author }) => {   //2. o podemos pasar las props como parametros también, pero en curly braces (tienen que matchear con las propiedades el objeto de array)
                             
   //const { img, title, author } = book    //1. aquí ya no necesito poner props.book, sólo props, ya no tenemos la prop book que tenía el book
                                            
    return <article className='book'>
     <img src={ img} alt=""/>
     <h1>{ title }</h1>             
     <h4>{ author }</h4> 
    
    </article>
}

