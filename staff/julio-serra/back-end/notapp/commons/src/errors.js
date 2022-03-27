class DuplicityError extends Error{
    constructor(message) {
        super(message)

        this.name = this.constructor.name
    }
}

class CredentialsError extends Error {
    constructor(message) {
        super(message)

        this.name = this.constructor.name
    }
}

class NotFoundError extends Error {
    constructor(message) {
        super(message)

        this.name = this.constructor.name
    }
}

class AuthError extends Error {
    constructor(message) {
        super(message)

        this.name = this.constructor.name
    }
}

module.exports = {
    DuplicityError,
    CredentialsError,
    NotFoundError,
    AuthError
}