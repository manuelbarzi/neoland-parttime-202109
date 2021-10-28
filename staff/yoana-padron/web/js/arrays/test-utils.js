function describe(text) {
    console.log('%c' + text, 'font-weight: bold; font-size: 2rem;')
}

function success(text) {
    console.log('%c' + text + ' ✅ 💃🕺', 'font-weight: bold; color: green; font-size: 2rem;')
}

function fail(text) {
    console.log('%c' + text + ' ❌ 💀🪦', 'font-weight: bold; font-size: 2rem; color: red')
}