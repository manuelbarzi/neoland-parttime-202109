const logger = {
    level: 'debug',

    debug(message) {
        this.level === 'debug' && console.log('%cDEBUG %c' + new Date().toISOString() + ' %c' + message, 'color: green;', 'color: lightgray;', 'color: green;')
    },

    info(message) {
        (this.level === 'debug' || this.level === 'info') && console.log('%cINFO %c' + new Date().toISOString() + ' %c' + message, 'color: blue;', 'color: lightgray;', 'color: blue;')
    },

    warn(message) {
        (this.level === 'debug' || this.level === 'info' || this.level === 'warn') && console.log('%cWARN %c' + new Date().toISOString() + ' %c' + message, 'color: gold;', 'color: lightgray;', 'color: gold;')
    },

    error(message) {
        (this.level === 'debug' || this.level === 'info' || this.level === 'warn' || this.level === 'error') && console.log('%cERROR %c' + new Date().toISOString() + ' %c' + message, 'color: red;', 'color: lightgray;', 'color: red;')
    }
}

export default logger