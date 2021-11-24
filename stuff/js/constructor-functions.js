console.log('> constructor functions')

var a = [1, 2, 3]
// a = new Array(1, 2, 3)

var o = { name: 'Peter' }
// o = new Object(...)

var f = function () { return 1 }
//f = new Function('return 1')

var d = new Date

var e = new Error('fatal thing')

function Chachay() {
    for (var i = 0; i < arguments.length; i++) {
        var element = arguments[i]

        this[i] = element
    }

    this.length = arguments.length
}

// var c = new Chachay
var c = new Chachay('a', 'b', 'c')
var a = new Array('a', 'b', 'c')

Chachay.prototype.forEach = function (callback) {
    for (var i = 0; i < this.length; i++)
        callback(this[i], i, this)
}

c.forEach(console.log)
a.forEach(console.log)

c = new Chachay('hola', 'mundo', '!')
c.forEach(function (element) { console.log(element) })

a = new Array('hola', 'mundo', '!')
a.forEach(function (element) { console.log(element) })

// can i manipulate a prototype?

Object.prototype.forEach = function () { return ':P' }

var o = { name: 'Peter' }

o.forEach()
//':P'

Chachay.prototype.sort = function (callback) {
    for (var i = 0; i < this.length - 1; i++) {
        var min = this[i], k = i

        for (var j = i + 1; j < this.length; j++) {
            var current = this[j]

            if (callback ? callback(current, min) < 0 : current + '' < min + '') {
                k = j

                min = current
            }

            // count++
        }

        if (k !== i) {
            var temp = this[i]

            this[i] = this[k]
            this[k] = temp
        }

    }

    //console.log('count', count)

    return this
}

c = new Chachay('j', 'a', 'w', 'z', 'y', 'x', 'm', 'k', 'o', 'r', 's', 'e', 'j', 'ñ', 'v', 'b', 'n', 't', 'd')

c.sort()

console.log(c)