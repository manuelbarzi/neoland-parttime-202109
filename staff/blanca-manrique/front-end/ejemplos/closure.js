// demo 1

function talker(from) {
    return function(to, message) { // closure
        return `${from}: ${message} -> ${to}`
    }
}

const peterTalk = talker('Peter')
const wendyTalk = talker('Wendy')
const campaTalk = talker('Campa')
const pepitoTalk = talker('Pepito')

console.log(peterTalk('Wendy', 'Hello!'))
console.log(wendyTalk('Peter', 'Hi...'))
console.log(peterTalk('Wendy', 'Not in a nice mood, right?'))
console.log(wendyTalk('Peter', 'What!?'))
console.log(peterTalk('Wendy', '"Me molas"'))
console.log(wendyTalk('Peter', 'Are you fine!?'))
console.log(campaTalk('Peter', 'You may be more accurate, my friend'))
console.log(peterTalk('Campa', 'Hmmm... oh, well, hmmm.., sorry.. sh*t!'))
console.log(campaTalk('Peter', 'Hey, you suck my energy... not nice'))
console.log(peterTalk('Campa', 'Sorry, sorry, sorry...'))
console.log(pepitoTalk('Campa', 'I may advice, Peter, you are not his friend'))

// demo 2

function on(num) {
    return {
        add(otherNum) {
            return num + otherNum
        },
        sub(otherNum) {
            return num - otherNum
        }
    }
}

const a = 1, b = 2

const onA = on(a)
const onB = on(b)

console.log(onA.add(10))
console.log(onB.add(10))

console.log(onA.sub(10))
console.log(onB.sub(10))

// demo 3

function securityBox(secret, password) {
    let _secret = secret
    let _password = password

    return { // object
        retrieveSecret(password) { // closure
            if (password === _password) return _secret

            throw new Error('wrong password')
        },

        changePassword(password, newPassword) { // closure
            if (password === _password) {
                _password = newPassword

                return
            }

            throw new Error('wrong password')
        }
    }
}

const pepitoBox = securityBox('I like Campa, but she doesnt know it', '123123123')

console.log(pepitoBox.retrieveSecret('123123123'))

pepitoBox.changePassword('123123123', 'sldkhfksdhfkshdfkdsh')

console.log(pepitoBox.retrieveSecret('sldkhfksdhfkshdfkdsh'))

const yoanaBox = securityBox('Bitcoin private key: 12301833120831092830129asdfa0sdf8asdfasdf08', '123049qw98aslhdfkhasklfhasfhaksdhfakshfadf')

console.log(yoanaBox.retrieveSecret('123asklfjasjflasdjfka'))