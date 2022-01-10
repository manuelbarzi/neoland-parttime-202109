
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

//children prop, es lo que se renderea entre el opening y closing tag del componente, en este ejemplo Book, aquí agregams otra etiqueta </book> que cierrra
//pero en este ejemplo sólo camabiremos 1 libro, si quiseramos cambiar todos lo haríamos en los firstbook, secondBook, porque todos llevaran esa nueva propiedad
function Booklist(){
    return (
        <section className='booklist'>   

            <Book img={ firstBook.img } title={ firstBook.title } author={ firstBook.author }> 
                {/* //este es el children prop */}
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, nostrum. </p>
            </Book>
            <Book img={ secondBook.img } title={ secondBook.title } author={ secondBook.author }/>         

       </section>
    )
}

//PROPS CHILDREN, cómo accedo? 
// const Book = ({ img, title, author, children }) => {  puede agregar en los parametros la prop children, y esa propeidad acceder a ella con crly braces en el return o :
//si lo queremos hacer así con desctruvturing en const:
const Book = ( props ) => { 

   const { img, title, author } = props  //aquí también podemos poner children, pero en el return sin props

 
    return <article className='book'>
     <img src={ img} alt=""/>
     <h1>{ title }</h1>             
     <h4>{ author }</h4> 
                        {/* //tiene children props */}
    { props.children }    
     
    </article>
}

