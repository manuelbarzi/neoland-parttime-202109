//**** Frutas ****

//pera
var pear = document.querySelector('.pear')
pear.draggable = true  //se selecciona el elemento y se hace draggable

pear.addEventListener('dragstart', function (event) {  //se agrega un evento a la variable pera con dragstart
    event.dataTransfer.setData('id', 'pear')            //al evento se agrega método setData 
})

//cerezas
var cherries = document.querySelector('.cherries')
cherries.draggable = true  

cherries.addEventListener('dragstart', function (event) {  
    event.dataTransfer.setData('id', 'cherries')  
})

//coco
var coco = document.querySelector('.coco')
coco.draggable = true  

coco.addEventListener('dragstart', function (event) {  
    event.dataTransfer.setData('id', 'coco')  
})

//piña
var pineapple = document.querySelector('.pineapple')
pineapple.draggable = true  

pineapple.addEventListener('dragstart', function (event) {  
    event.dataTransfer.setData('id', 'pineapple')  
})

//naranja
var orange = document.querySelector('.orange')
orange.draggable = true  

orange.addEventListener('dragstart', function (event) {  
    event.dataTransfer.setData('id', 'orange')  
})

//manzana
var apple = document.querySelector('.apple')
apple.draggable = true  

apple.addEventListener('dragstart', function (event) {  
    event.dataTransfer.setData('id', 'apple')  
})

//durazno
var peach = document.querySelector('.peach')
peach.draggable = true  

peach.addEventListener('dragstart', function (event) {  
    event.dataTransfer.setData('id', 'peach')  
})


//**** Licuadora ****
var blender = document.querySelector('.blender');

blender.addEventListener('dragover', function(event) {
    event.preventDefault()
})

blender.addEventListener('drop', function (event) {
    var id = event.dataTransfer.getData('id')


 //drop de frutas

    if (id === 'pear')
        blender.append(pear)

    if (id === 'cherries')
        blender.append(cherries)

    if (id === 'coco')
        blender.append(coco)
    
    if (id === 'pineapple')
        blender.append(pineapple)

    if (id === 'orange')
        blender.append(orange)

    if (id === 'apple')
        blender.append(apple)

    if (id === 'peach')
        blender.append(peach)
    
})

document.querySelector('.blender-smoothie')
blender.addEventListener('click', function(blender){
   
    blender.target.classList.toggle('.blender-smoothie')
})