// Crear una función constructora para la creación de objetos tipo "persona"

//dentro del paréntesis definimos los argumentos que llevará esa función
function Persona(nombre, apellido, edad, email){  
    //definimos el cuerpo de implementación de esta función constructora
    this.nombre = nombre;      //se usa this para referirnos a la propiedades que tendrá el objeto
    this.apellido = apellido;   //asignamos el parametro que traiga el parametro nombre
    this.edad = edad;           //especificamos el valor de la edad
    this.email = email;         //y también correo
}

//ahora podemos crear objetos de esta clase
//creamos var edward y asigankos una nueva instancia de la clase persona
var edward = new Persona('Edward', 'Ortiz', 33, 'edward@mail.co');  //le estamos pasando los datos

console.log(edward)  //represnetacion en cadena de carácteres
//en consola nos indica en tipo de objeto que sería en este caso persona y luego todos los datos

console.log(edward.nombre); // impirmará cada uno de los datos
console.log(edward.apellido);
console.log(edward.edad);
console.log(edward.email);



