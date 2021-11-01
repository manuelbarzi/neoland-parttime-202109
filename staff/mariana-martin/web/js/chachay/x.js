function Chachay(){ //se creó una función constructora tipo Chachay
    for (var i = 0; i < arguments.length; i++){   //vamos a hacer un for y pasarle todos los argumentos que tenemos en el test 
                                                // para hacer el objeto tipo array
        var element = arguments[i]              //guardar cada argumento en la variable element

        this[i] = element                          //y los elementos serán guardados en this, (que es donde apunta el objeto chachay)
    }
    this.length = arguments.length            // la longitud de los argumentos será el largo de this, se le otorga la propiedad length, porque el array tiene esta propiedad
                                            // y como queremos que Chachay se comporte como tipo array, ponemos el length
}