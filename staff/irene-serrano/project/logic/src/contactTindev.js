const nodemailer = require("nodemailer");
const { env: { EMAIL, PASSWORD } } = process

/**
 * Sends the information from a contact form to a platform email
 * 
 * @param {string} name name provided by user
 * @param {string} email email provided by user
 * @param {string} message message provided by user
 * @param {string} EMAIL platform administration email
 * @param {string} PASSWORD platform administration password
 * 
 * 
 * @return {object} email params for Nodemailer
 */

function contactTindev(name, email, message) {
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
        from: '"[TINDEV] Form contact" <tindev@zohomail.eu>', 
        to: 'tindev@zohomail.eu',
        subject: "[TINDEV contact form]",
        html: `<div style="font-family: -apple-system, BlinkMacSystemFont; color:  #004148;" > 
          <h1 style="color:#004148;" >Has sido contactado por el formulario de la página web</h1>
            <div style="width: 80%; margin: auto; background-color:#f2f2f8; padding: 2rem; border-radius: 0.5rem; border: 1px solid #1ae3a3;">
              <p>${message}</p>
          
              <div>
                <span style="font-weight: 700;">${name}</span>
                <a style="color:#1ae3a3 ;" >${email}</a>
              </div>
            </div>
        </div>`,
    })
}

module.exports = contactTindev