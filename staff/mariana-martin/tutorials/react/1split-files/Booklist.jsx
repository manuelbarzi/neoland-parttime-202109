

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





