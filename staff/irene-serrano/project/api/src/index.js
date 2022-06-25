require('dotenv').config()

const {
  mongoose: { connect },
} = require("data");

const express = require("express");
const cors = require("cors");

const {
  registerDeveloper,
  registerCompany,
  authenticateUser,
  retrieveDeveloper,
  retrieveDeveloperFromProfile,
  retrieveCompanyFromOffer,
  retrieveDeveloperFromCompany,
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

} = require('./handlers');
const { json } = require('express');


/* 
const {extractDeveloperIdFromAuthorization } = require('./handlers/helpers')

*/

const { env: { MONGODB_URL, PORT } } = process


connect(MONGODB_URL)
  .then(() => {
    console.log("connected to db");

    const api = express();

    api.use(cors());

    const router = express.Router();

    const jsonBodyParser = express.json();

    router.post("/developer", jsonBodyParser, registerDeveloper);
    router.post("/company", jsonBodyParser, registerCompany);

    router.post("/developer/auth", jsonBodyParser, authenticateUser)
    router.post("/company/auth", jsonBodyParser, authenticateUser)
    router.post("/user/auth", jsonBodyParser, authenticateUser)

    router.get("/developer/:developerId", jsonBodyParser, retrieveDeveloper)
    router.get("/developer", jsonBodyParser, retrieveDeveloperFromProfile)

    router.get("/company", jsonBodyParser, retrieveCompany)
    router.get("/company/:companyId", jsonBodyParser, retrieveCompanyFromOffer)

    router.get("/developers", jsonBodyParser, retrieveAllDevelopers)

    router.patch("/developer", jsonBodyParser, updateDeveloper)
    router.patch("/company", jsonBodyParser, updateCompany)

    router.patch("/developer/unregister", jsonBodyParser, unregisterDeveloper)
    router.patch("/company/unregister", jsonBodyParser, unregisterCompany)

    router.post("/offer", jsonBodyParser, createOffer);

    router.get("/offer/:offerId", jsonBodyParser, retrieveOffer)
    router.get("/offers", jsonBodyParser, retrieveAllOffers)
    router.get("/company/:companyId/offers", jsonBodyParser, retrieveCompanyOffers)

    router.patch("/offer/:offerId", jsonBodyParser, updateOffer);
    router.patch("/offer/:offerId/deactivate", jsonBodyParser, deactivateOffer);
    router.patch("/offer/:offerId/activate", jsonBodyParser, activateOffer);

    router.delete("/offer/:offerId", jsonBodyParser, deleteOffer);

    //OFFER REQUESTS ROUTES
    router.post("/offer/:offerId", jsonBodyParser, addOfferRequest);
    router.get("/offer/:offerId/request/:requestId", jsonBodyParser, retrieveCandidate)
    router.patch("/offer/:offerId/request/seen/:requestId", jsonBodyParser, setRequestSeen)
    router.patch("/offer/:offerId/request/contacted/:requestId", jsonBodyParser, setRequestContacted)
    router.patch("/offer/:offerId/request/rejected/:requestId", jsonBodyParser, setRequestRejected)

    //EMAIL SENDING

    router.post("/offer/:offerId/request/:requestId/contact", jsonBodyParser, sendContactEmailFromRequest);
    router.post("/developer/:developerId/contact", jsonBodyParser, sendContactEmailFromProfile);
    router.post("/contact", jsonBodyParser, contactTindev)

    api.use("/api", router);

    api.listen(PORT, () => console.log("json server running"));
  });
