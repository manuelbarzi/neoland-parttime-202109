function describe(text) {
    console.log('%c' + text, 'font-weight: bold;')
}

function success(text) {
    console.log('%c' + text + ' ✅ 💃🕺', 'font-weight: bold; color: green')
}

function fail(text) {
    console.log('%c' + text + ' ❌ 💀🪦', 'font-weight: bold; color: red')
}

function compras(product,subtotal,discount,shipping,total,days) {
    console.log('%c' +' ARTICULOS EN CARRITO => '+ product+'\n SUBTOTAL:'+' $' + subtotal +'\n DISCOUNT:' +' $'+ discount+'\n ENVÍO:' +' $'+ shipping +'\n TOTAL:'+' $'+ total +'\n Tiempo de espera '+days+' dias', 'font-weight: bold; color: green')
}