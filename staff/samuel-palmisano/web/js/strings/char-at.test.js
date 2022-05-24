describe('TEST cahrAt');

// CASE 1

var res = cahrAt("12345", 2);

if (
    typeof res === "string"
    && res === "3"
    )
    success('test 1 ok')
else
    fail('test 1 failed')


// CASE 2

var res = cahrAt("12345", 3);

if (
    typeof res === "string"
    && res === "4"
    )
    success('test 2 ok')
else
    fail('test 2 failed')


// CASE 3

var res = cahrAt("12345");

if (
    typeof res === "string"
    && res === ""
    )
    success('test 3 ok')
else
    fail('test 3 failed')


// CASE 4

var res = cahrAt("12345", -2);

if (
    typeof res === "string"
    && res === ""
    )
    success('test 4 ok')
else
    fail('test 4 failed')