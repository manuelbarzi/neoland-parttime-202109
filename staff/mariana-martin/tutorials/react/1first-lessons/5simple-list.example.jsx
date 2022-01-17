//ejemplo de como retornar una lista wrappeada, 
//en el archivo de Booklist-simple-list, se menciona que no se puede renderear un const (array) que tiene muchos objetos
// pero si renderear un array de strings, pero es mejor wrappearlos en html, para mejores resultados:


//cómo puedo wrappear js en html, podemos usar el map method
//nueva var newNames

const names = [ 'john', 'peter', 'susan']
const newNames = names.map((name) => {
    return <h1>{ name }</h1>  //le paso que me retorne esa var en curly braces
}) 
console.log(newNames)

function Booklist(){
    return <section className='booklist'>
        {newNames}

    </section>
}

//NOTA
// en react podemos renderear un array, pero un array no puede ser objectos, pero strings si, y es mejor wrappearlos en un html, como lo hciismos usando return <h1>

//viendo este ejemplo ahora se iterara en el archivo de los libros que quedó pendiente