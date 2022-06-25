//const { transporter } = require('nodemailer')
const { models: { User, Offer } } = require('data')
const { validators: { validateId }, errors: { NotFoundError } } = require('commons')

const nodemailer = require("nodemailer");
const { env: { EMAIL, PASSWORD } } = process

/**
 * Sends the information from request accepted to developer email
 * 
 * @param {string} requestId request id that match developer and offer
 * @param {string} offerId id from offer that developer has applied
 * @param {string} companyId copmany that own the offer
 * @param {string} EMAIL platform administration email
 * @param {string} PASSWORD platform administration password
 * 
 * 
 * @return {object} email params for Nodemailer
 */


function sendContactEmailFromRequest(requestId, offerId, companyId) {
  validateId(requestId, 'request id')
  validateId(companyId, 'company id')
  validateId(offerId, 'offer id')

  return User.findById(companyId)
    .then(company => {
      if (!company) throw new NotFoundError('company not found')

      return Offer.findById(offerId)
        .then(offer => {
          if (!offer) throw new NotFoundError('offer not found')

          const { requests } = offer
          const requestIndex = requests.findIndex((request) => request.id === requestId)
          
          if (requestIndex === -1) throw new NotFoundError(`request not found`)

          const contactedRequest = requests[requestIndex]

          User.findById(contactedRequest.developer)
            .then(developer => {

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
                from: '"Tindev team 🔥" <tindev@zohomail.eu>', 
                //  to: contactedRequest.email, // list of receivers
                to: 'tindev@zohomail.eu',
                subject: "Ey! Alguien te quiere en su equipo!", 
                html: `<div style="font-family: -apple-system, BlinkMacSystemFont;flex-wrap: wrap; color:  #004148;">   

                <h1 >Hola, ${developer.name}!</h1>
                <h3><a style="color:#0fd093" href=${company.link}>${company.name}</a> quiere contactar contigo por la oferta de trabajo:</h3>
                
                <br></br>
                <br></br>
                
                <div style="width: 80%; margin: auto; background-color:#f2f2f8; padding: 2rem; border-radius: 0.5rem; border: 2px solid #1ae3a3;  ">
                  <h3>${offer.title}</h3>
                  <p>${offer.minSalary} - ${offer.maxSalary}€</p>
                  <p>${offer.description}</p>
                </div>
                
                
                <br></br>
                <br></br>
                
                <p>Si sigues interesado, envía un correo a <a style="color:#0fd093" >${company.email}</a> presentándote, te están esperando.</p>
                
                <br></br>
                <br></br>
                
                <button style="width: fit-content; margin: 0.5rem auto; padding: 0.5rem 50px; border: 2px solid #1ae3a3; border: none; border-radius: 0.5rem; background-color: #1ae3a3; color:  #004148; font-weight: 700 ;" href=${company.email}>Escribir</button>
                
                </div>`,
              })
            })
        })
    })
}
module.exports = sendContactEmailFromRequest