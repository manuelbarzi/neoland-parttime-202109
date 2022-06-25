//const { transporter } = require('nodemailer')
const { models: { User } } = require('data')
const { validators: { validateId }, errors: { NotFoundError } } = require('commons')

const nodemailer = require("nodemailer");
const { env: { EMAIL, PASSWORD } } = process

/**
 * Sends a information email to developer
 * 
 * @param {string} developerId developer id that need to contact
 * @param {string} companyId copmany that wants to contact a dev
 * @param {string} EMAIL platform administration email
 * @param {string} PASSWORD platform administration password
 * 
 * 
 * @return {object} email params for Nodemailer
 */


function sendContactEmailFromProfile(developerId, companyId) {
  validateId(developerId, 'developer id')
  validateId(companyId, 'company id')

  return User.findById(companyId)
    .then(company => {
      if (!company) throw new NotFoundError('company not found')

      return User.findById(developerId)
        .then(developer => {
          if (!developer) throw new NotFoundError('developer not found')


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
                //  to: contactedRequest.email, 
                to: 'tindev@zohomail.eu',
                subject: "Ey! Alguien te quiere en su equipo!",
                html: `<div style="background-color:#f2f2f8; padding: 3rem; border-radius: 0.5rem; border: 2px solid #1ae3a3; font-family: -apple-system, BlinkMacSystemFont;flex-wrap: wrap; ">   
    
                <h1 style="color: #004148; width: 100%" >Hola, ${developer.name}!</h1>
                <h3 style="color: #004148; width: 100%" >Al equipo de <a style="color:#0fd093" href=${company.link}>${company.name}</a> les has gustado</h3>
            
                <p style="color: #004148; width: 100%" >Si estas interesado, envía un correo a <a>${company.email}</a> presentándote, te están esperando.</p>
                <button style="width: fit-content; margin: 0.5rem auto; padding: 0.5rem 50px; border: 2px solid #1ae3a3; border: none; border-radius: 0.5rem; background-color: #1ae3a3; color:  #004148; font-weight: 700 ;" href=${company.email}>Escribir</button>
            
              </div>`,
              })
            })



        })
}
module.exports = sendContactEmailFromProfile