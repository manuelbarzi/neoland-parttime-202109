function assignNames(name, surname, age) {
    this.name = name
    this.surname = surname
    this.age = age

}

const Giancarlo = {}

const Yuli = {}

const Nati ={}

assignNames.apply(Giancarlo, ['Giancarlo', 'Gonzalez', 33])
console.log(Giancarlo)

assignNames.call(Giancarlo, 'Giancarlo', 'Gonzalez', 33)
console.log(Giancarlo)

assignNames.call (Yuli, 'Yuli', '')