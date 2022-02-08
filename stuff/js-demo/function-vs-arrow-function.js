//tengo un objeto persona

var persona = {
    name: 'Pepe',
    surname: 'Grillo',
    age: 6,
    gender: 'male',

    //---------------------ESTA ES UNA FUNCIÓN NORMAL Y EL THIS APUNTARÍA AL OBJETO PERSONA 

    //     saludar(name){

    //         return `${this.name}: Hello, ${name}!`
    //     }
    // }
    //     console.log(persona.saludar('Wendy'))    //*** RESPUESTA EN CONSOLA: Pepe: Hello, Wendy!

    //----------------------PERO CUANDO tengo arrow function, el this apunta a Window:

        saludar: (name) => {
            return `${this.name}: Hello, ${name}!`   //el this ahora apunta a window, porque es una arrow function, y no aparece el nombre por que ya está asociado a windows no a persona
        }
    }

    console.log(persona.saludar('Wendy'))   //*** RESPUESTA EN CONSOLA: : Hello, Wendy!


