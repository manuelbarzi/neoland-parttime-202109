
const firstBook = {
img: "https://images-na.ssl-images-amazon.com/images/I/91Q9eneR7BL._AC_UL604_SR604,400_.jpg",
title: 'The Grinch',
author: 'Dr. Seuss'
}


const secondBook = {
    img: "https://images-na.ssl-images-amazon.com/images/I/91DNhLLmUOL._AC_UL604_SR604,400_.jpg",
    title: 'Atlas of the Heart',
    author: 'Brené Brown'
    }



function Booklist(){
    return (
        <section className='booklist'>   

            <Book img={ firstBook.img } title={ firstBook.title } author={ firstBook.author }/> 
            <Book img={ secondBook.img } title={ secondBook.title } author={ secondBook.author }/>         

       </section>
    )
}

//Aletrnativa para acceder a las props usando destructuring:  destructurar propiedades, para no poner tanto props. props. props.
const Book = ({ img, title, author }) => {   // 2 aquí los estamos pasando en los parámetros de la función
    //const { img, title, author } = props   esta es 1 opción, o las podemos pasar directamente donde está el parametro props arriba

    return <article className='book'>
                                        {/* //ya no escribirmos: props.title,porque hicemos destructuring */}
     <img src={ img} alt=""/>
     <h1>{ title }</h1>             
     <h4>{ author }</h4> 
    
     
    </article>
}

