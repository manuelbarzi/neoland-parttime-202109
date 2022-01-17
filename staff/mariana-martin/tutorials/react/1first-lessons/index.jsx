//stateless functional component /dumb component
//always return something, ex. JSX


//JSX Rules:
//return a single element  (por eso se hacen dvi, sections, paradevolver sólo un elemento)
//div / section / article or fragment
//use camelCase instead of class
//close every element
//formatting

function Greetings(){
    return (  //preferible usar parentesis despues del return, para ordenarlo mejor, ya que depsués del return en la misma línea (esta) es lo que se regresa
    <div>
    <h4> this is john and this is my first component </h4> 
    </div>
    ) 
}


//haremos otro compoenent de ejemplo:
//NESTED COMPONENT, React Tools

function Greeting(){  //Greeting = 1 component
    return (
        <div>
           <Person />  
           <Message />  
            
        </div>
    )
}


const Person = () =>  <h2>john doe</h2>
const Message = () => {
return <p>this is my message</p>}

