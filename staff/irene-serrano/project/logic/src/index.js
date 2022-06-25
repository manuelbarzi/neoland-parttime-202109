const registerDeveloper = require('./registerDeveloper')
const registerCompany = require('./registerCompany')
const authenticateUser = require('./authenticateUser')
const retrieveDeveloper = require('./retrieveDeveloper')
const retrieveCompany = require('./retrieveCompany')
const retrieveAllDevelopers = require('./retrieveAllDevelopers')
const updateDeveloper = require('./updateDeveloper')
const updateCompany = require('./updateCompany')
const unregisterDeveloper = require('./unregisterDeveloper')
const unregisterCompany = require('./unregisterCompany')

const createOffer = require('./createOffer')
const retrieveOffer = require('./retrieveOffer')
const retrieveAllOffers = require('./retrieveAllOffers')
const retrieveCompanyOffers = require('./retrieveCompanyOffers')
const updateOffer = require('./updateOffer')
const deactivateOffer = require('./deactivateOffer')
const activateOffer= require('./activateOffer')
const deleteOffer = require('./deleteOffer')

const addOfferRequest = require('./addOfferRequest')
const retrieveCandidate = require('./retrieveCandidate')
const setRequestSeen = require('./setRequestSeen')
const setRequestContacted = require('./setRequestContacted')
const setRequestRejected = require('./setRequestRejected')

const sendContactEmailFromRequest = require('./sendContactEmailFromRequest')
const sendContactEmailFromProfile = require('./sendContactEmailFromProfile')
const contactTindev = require('./contactTindev')

module.exports = {
    registerDeveloper,
    registerCompany,
    authenticateUser,
    retrieveDeveloper,
    retrieveCompany,
    retrieveAllDevelopers,
    updateDeveloper,
    updateCompany,
    unregisterDeveloper,
    unregisterCompany,

    createOffer,
    updateOffer,
    deactivateOffer,
    activateOffer,
    retrieveOffer,
    retrieveAllOffers,
    retrieveCompanyOffers,
    deleteOffer,

    addOfferRequest,
    retrieveCandidate,
    setRequestSeen,
    setRequestContacted, 
    setRequestRejected,

    sendContactEmailFromRequest,
    sendContactEmailFromProfile,
    contactTindev

}