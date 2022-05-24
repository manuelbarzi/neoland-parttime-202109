describe('TEST includes');

// CASE 1

var res = includes("Hello world!", "o");

if (
    typeof res === "boolean"
    && res === true
    )
    success('test ok')
else
    fail('test failed')


// CASE 2

var res = includes("Hello world!", "g");

if (
    typeof res === "boolean"
    && res === false
    )
    success('test ok')
else
    fail('test failed')


// CASE 3

var res = includes("Hello world!", "ll");

if (
    typeof res === "boolean"
    && res === true
    )
    success('test ok')
else
    fail('test failed')

// CASE 4

var res = includes("Hello world!", "eo");

if (
    typeof res === "boolean"
    && res === false
    )
    success('test ok')
else
    fail('test failed')

// CASE 5

var res = includes("Hello world!", 23);

if (
    typeof res === "boolean"
    && res === false
    )
    success('test ok')
else
    fail('test failed')

// CASE 6

var res = includes("Hello world!", "o", 9);

if (
    typeof res === "boolean"
    && res === false
    )
    success('test ok')
else
    fail('test failed')

// CASE 7

var res = includes("Hello world!", "l", 6);

if (
    typeof res === "boolean"
    && res === true
    )
    success('test ok')
else
    fail('test failed')

// CASE 8

var res = includes("Hello world!", "ll", 1);

if (
    typeof res === "boolean"
    && res === true
    )
    success('test ok')
else
    fail('test failed')

// CASE 9

var res = includes("Hello world!", "ll", 9);

if (
    typeof res === "boolean"
    && res === false
    )
    success('test ok')
else
    fail('test failed')

// CASE 10

var res = includes("Hello world!");

if (
    typeof res === "boolean"
    && res === true
    )
    success('test ok')
else
    fail('test failed')

// CASE 9

var res = includes("Hello world!", "");

if (
    typeof res === "boolean"
    && res === true
    )
    success('test ok')
else
    fail('test failed')