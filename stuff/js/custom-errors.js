class DuplicityError extends Error {
    constructor(message) {
        super(message)

        this.name = this.constructor.name
    }
}

const error = new DuplicityError('user already exists')

console.log(error)