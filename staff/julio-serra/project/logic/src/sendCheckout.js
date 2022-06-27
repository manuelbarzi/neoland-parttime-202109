const { models: { User, Space } } = require('data')
const {
    validators: { validateId },
    errors: { NotFoundError }
} = require('commons')

const nodemailer = require('nodemailer')
const { env: { EMAIL, PASSWORD } } = process

function sendCheckout(userId, spaceId) {
    validateId(userId, 'user id')
    validateId(spaceId, 'space id')

    return Space.findById(spaceId)
        .then(space => {
            if (!space) throw new NotFoundError('space not found')

            return User.findById(userId)
                .then(user => {
                    if (!user) throw new NotFoundError('user not found')

                    const transporter = nodemailer.createTransport({
                        host: "smtp.zoho.eu",
                        port: 465,
                        secure: true,
                        auth: {
                            user: EMAIL,
                            pass: PASSWORD,
                        },
                    })

                    return transporter.sendMail({
                        from: '"Rent Space Local" <spacelocalapp@zohomail.eu>',
                        //  to: contactedRequest.email, 
                        to: 'spacelocalapp@zohomail.eu',
                        subject: "Hay interesados en este espacio",
                        html: `<div style="background-color:#f2f2f8; padding: 3rem; border-radius: 0.5rem; border: 2px solid #1ae3a3; font-family: -apple-system, BlinkMacSystemFont;flex-wrap: wrap; ">   
    
                <h1 style="color: #004148; width: 100%" >Hola,</h1>
                <p style="color: #004148; width: 100%" >Si estas interesado, envianos un correo.</p>
            
              </div>`,
                    })
                })

        })

}

module.exports = sendCheckout