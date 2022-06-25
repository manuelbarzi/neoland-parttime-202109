import { useEffect, useState } from "react"
import { useNavigate, Routes, Route } from "react-router-dom"
import CompanyOfferList from "./CompanyOfferList"
import EditOffer from "./EditOffer"

export default function () {
   
    return <div className="CompanyOffers">

        <Routes>
            <Route path="/" element={<CompanyOfferList />} />
            <Route path="/edit/:offerId" element={<EditOffer />} />
        </Routes>
    </div>
}