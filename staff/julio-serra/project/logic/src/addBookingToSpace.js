const { models: { User, Space } } = require('data')
const { validators: { validateId }, errors: { NotFoundError } } = require('commons')

const nodemailer = require('nodemailer');
const { env: { EMAIL, PASSWORD } } = process


function createBooking(userId, spaceId) {
    validateId(userId, 'user id')
    validateId(spaceId, 'space id')

    return Promise.all([User.findById(userId), Space.findById(spaceId)])
        .then(([user, space]) => {
            if (!user) throw new NotFoundError(`user with id ${userId} not found`)
            if (!space) throw new NotFoundError(`user with id ${spaceId} not found`)

            const transporter = nodemailer.createTransport({
                host: "smtp.zoho.eu",
                port: 465,
                secure: true,
                auth: {
                    user: EMAIL,
                    pass: PASSWORD,
                },
            });

            return transporter.sendMail({
                from: '"Rent Space Local" <spacelocalapp@zohomail.eu>',
                to: 'spacelocalapp@zohomail.eu',
                subject: "Hay interesados en este espacio",
                html: `<div style="background-color:#f2f2f8; padding: 3rem; border-radius: 0.5rem; border: 2px solid #1ae3a3; font-family: -apple-system, BlinkMacSystemFont;flex-wrap: wrap; ">   

                    <h1 style="color: #004148; width: 100%" >Hola, </h1>
                    <p style="color: #004148; width: 100%" >Hay gente que está interesado en este espacio "${space.title}"</p>
                
                </div>`,

            })

        })


}


module.exports = createBooking