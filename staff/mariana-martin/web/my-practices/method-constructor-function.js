//Definir un método de instancia en una función constructora
//Los métodos de instancia nos permite realizar operaciones sobre una instancia de objeto, 
//manipular por ejmeplo los valores de los atributos realizar algun calculo

//clase constructora
function Persona(nombre, apellido, edad, email){  
    //cuerpo de implem,entación
    //estos son atributos hasta la línea 12
    this.nombre = nombre;      
    this.apellido = apellido;   
    this.edad = edad;           
    this.email = email;         

    //definimos un método que se llame mostrarDatos y le asignamos una función anónima


    this.mostrarDatos = function(){
        //estos son los tributos de esta clase:
        console.log('Nombre:', this.nombre);
        console.log('Apellido:', this.apellido);
        console.log('Edad:', this.edad);
        console.log('Email:', this.email);
    };
}

var edward = new Persona('Edward', 'Ortiz', 33, 'edward@mail.co');  //le estamos pasando los datos
console.log(edward) 

edward.mostrarDatos(); //invocar el método de instancia 


//Podemos crear otra persona

var daniela = new Persona ('Daniela', 'Ortiz', 26, 'daniela@mail.co');

daniela.mostrarDatos();  //y en consola nos dará los datos de esa instancia de la clase constructora "persona"