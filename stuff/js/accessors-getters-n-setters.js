// demo 1

const user = {
    _doc: {
        name: 'Peter',
        surname: 'Pan'
    },

    set name(name) {
        this._doc.name = name
    },

    get name() {
        return this._doc.name
    },

    set surname(surname) {
        this._doc.surname = surname
    },

    get surname() {
        return this._doc.surname
    }
}

console.table(user)

console.log(user.name)
//'Peter'
console.log(user.surname)
//'Pan'

user.name = 'Pedro'
//'Pedro'
user.surname = 'Bread'
//'Bread'

console.log(user.name)
//'Pedro'
console.log(user.surname)
//'Bread'

console.table(user)

// demo 2 classes (es6)

class User {
    constructor(doc) {
        this._doc = doc
    }

    set name(name) {
        this._doc.name = name
    }

    get name() {
        return this._doc.name
    }

    set surname(surname) {
        this._doc.surname = surname
    }

    get surname() {
        return this._doc.surname
    }
}

const user = new User({
        name: 'Peter',
        surname: 'Pan'
    })

console.table(user)

console.log(user.name)
//'Peter'
console.log(user.surname)
//'Pan'

user.name = 'Pedro'
//'Pedro'
user.surname = 'Bread'
//'Bread'

console.log(user.name)
//'Pedro'
console.log(user.surname)
//'Bread'

console.table(user)

// demo 3 - constructor function (es5)

function User(doc) {
    this._doc = doc
}

User.prototype = {
    set name(name) {
        this._doc.name = name
    },

    get name() {
        return this._doc.name
    },

    set surname(surname) {
        this._doc.surname = surname
    },

    get surname() {
        return this._doc.surname
    }
}

const user = new User({
        name: 'Peter',
        surname: 'Pan'
    })

console.table(user)

console.log(user.name)
//'Peter'
console.log(user.surname)
//'Pan'

user.name = 'Pedro'
//'Pedro'
user.surname = 'Bread'
//'Bread'

console.log(user.name)
//'Pedro'
console.log(user.surname)
//'Bread'

console.table(user)