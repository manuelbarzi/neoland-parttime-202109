console.log('> objects')

var obj = { name: 'Peter', surname: 'Pan' }

var keys = Object.keys(obj)

for (var i = 0; i < keys.length; i++) {
    var key = keys[i]

    var value = obj[key]

    console.log(key, value)
}