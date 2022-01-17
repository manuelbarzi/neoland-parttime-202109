
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



const Book = ( {img, title, author }) => {   
 
    
    const clickHandler = () => {
        
        alert('hello world');
    };
                       
    
    
    const complexExample = (author) => {
        console.log(author) 
    }

    return <article className='book' onMouseOver={() => {
        console.log(title)
    }}>

     <img src={ img} alt=""/>
     <h1 onClick={() => console.log(title)}>{ title }</h1>              
     <h4>{ author }</h4>                                 
    <button type='button' onClick={clickHandler}> Refrence Example </button> 
    <button type='button' onClick={() => complexExample(author)}> More Complex Example </button> 
                                  
    </article>
}

