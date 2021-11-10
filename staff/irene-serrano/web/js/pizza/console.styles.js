//console.log('%cTESTA MENTO %cv1.1', 'font-weight: bold; font-size: 3rem; text-shadow: -4px 4px #ef3550, -8px 8px #f48fb1, -12px 12px #7e57c2, -16px 16px #2196f3, -20px 20px #26c6da, -24px 24px #43a047, -28px 28px #eeff41, -32px 32px #f9a825, -36px 36px #ff5722;', 'font-size: 1rem')

function describe(text) {
    console.log('%c' + text, 'font-weight: bold; font-size: 1rem')
}

function success(text) {
    console.log('%c' + text + ' ✅', 'font-weight: bold; background-color: green; font-size: 1rem; font-family: courier')
}

function fail(text) {
    console.log('%c' + text + ' ❌', 'font-weight: bold; background-color: red; font-size: 1rem; font-family: arial')
}
function message(text) {
    console.log( '%c' + text, 'font-weight: bold; font-size: 1rem; font-family: Palatino Linotype' )
}