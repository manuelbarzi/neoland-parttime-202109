//componente con otros componentes dentro:

function Booklist(){
    return (
        <section className='booklist'>  
            {/* //componentes de Book, instancias de book */}
            <Book /> 
            <Book /> 
            <Book /> 
            <Book /> 
            <Book /> 
            <Book /> 
        </section>
    )
}

//1 component
const Book = () => {  
    return <article className='book'>
       <Image></Image>
       <Title/>
       <Author/>

    </article>
}

//2 component
const Image = () => <img src="https://images-na.ssl-images-amazon.com/images/I/91Q9eneR7BL._AC_UL604_SR604,400_.jpg" alt=""></img>

//3 component

const Title = () =>  <h1>The Grinch</h1> 

//4 component
const Author = () =>  <h4>Dr. Seuss</h4> 

//para este mismo resultado puede ser que no tengamos todos esos componentes si no nada más en el componente de Book, poner como return la imagen el titutlo y e autor sin que sea componentes






