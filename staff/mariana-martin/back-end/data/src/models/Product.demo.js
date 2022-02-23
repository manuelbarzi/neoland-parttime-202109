//conecto a la base de datos


const { connect, disconnect } = require('mongoose')  //conecto con mongo base d datos

const Product = require('./Product')


connect('mongodb://localhost:27017/demo-db')
    .then(() => console.log('connected'))

    .then(() => Product.collection.drop()) //para no escribir drop en terminal para limpiar dattos y crear nuevos:

    .then(() => Product.create ({ brand: 'Nike', model: 'Air Max', size: '34', color: 'black', stock:'100', image: 'https://www.nike.com/mx/t/calzado-air-max-excee-kG4Tjc?cp=41842406843_ad_!11767673198!113099367734!c!pla-293946777986!483847606440&cp=82486655958_search_%7c%7c11767673198%7c113099367734%7c%7cc%7c%7c%7c483847606440&gclid=Cj0KCQiA09eQBhCxARIsAAYRiymQt5pADMj6ZSdCt7v9qGxQSj7a6YUwJHzuqrBuyO68yFpfqUTVIu0aAgTAEALw_wcB&gclsrc=aw.ds'  }))
    .then(() => Product.create ({ brand: 'Adidas', model: 'Adidas', size: '36', color: 'black', stock:'100', image: 'https://www.nike.com/mx/t/calzado-air-max-excee-kG4Tjc?cp=41842406843_ad_!11767673198!113099367734!c!pla-293946777986!483847606440&cp=82486655958_search_%7c%7c11767673198%7c113099367734%7c%7cc%7c%7c%7c483847606440&gclid=Cj0KCQiA09eQBhCxARIsAAYRiymQt5pADMj6ZSdCt7v9qGxQSj7a6YUwJHzuqrBuyO68yFpfqUTVIu0aAgTAEALw_wcB&gclsrc=aw.ds'  }))

    .then(() => disconnect())
    .then(() => console.log('disconnected'))