import './Home.css'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { extractPayload } from 'commons/src/validators'
import OfferList from './OfferList'
import OfferDetail from './OfferDetail'
import DeveloperList from './DeveloperList'
import DeveloperDetail from './DeveloperDetail'
import CreateOffer from './CreateOffer'
import CompanyOffers from './CompanyOffers'
import NavCompany from './NavCompany'
import NavDeveloper from './NavDeveloper'
import DeveloperProfile from './DeveloperProfile'
import CompanyProfile from './CompanyProfile'
import CompanyOfferProfile from './CompanyOfferProfile'
import Footer from './Footer'

export default function ({ onLoggedOut }) {
    const token = sessionStorage.token
    const payload = extractPayload(token)
    const [role] = useState(payload.role)
    const [developerId, setDeveloperId] = useState()

    const navigate = useNavigate()
    const logout = () => {
        delete sessionStorage.token
        onLoggedOut()
    }

    const showOfferDetail = offerId => navigate(`offer/${offerId}`)
    const showDeveloperDetail = developerId => {
        setDeveloperId(developerId)
        navigate(`/developer/${developerId}`)

    }

    if (role === 1) {
        return <div className='Home'>
           
            <Routes>
                <Route path="/" element={<OfferList onItemClick={showOfferDetail} />} />
                <Route path="/offer/:offerId" element={<OfferDetail />} />
                <Route path="/offer/owner/:companyId" element={<CompanyOfferProfile />} />
                <Route path="/profile" element={<DeveloperProfile onDeveloperDeleted={logout}/>} />
            </Routes>
            <NavDeveloper handleLogout={logout}/>
        </div>
    }

   if (role === 2) {
        return <div className='Home'>

            <Routes>
                <Route path="/candidates" element={<DeveloperList onItemClick={showDeveloperDetail} />} />
                <Route path="/developer/:developerId" element={<DeveloperDetail id={developerId} />} />
                <Route path="/new-offer" element={<CreateOffer />} />
                <Route path="/*" element={<CompanyOffers />} />
                <Route path='/my-offers/*' element={<CompanyOffers />} />
                <Route path="/profile" element={<CompanyProfile onCompanyDeleted={logout}/>} />
            </Routes>

           {/* <Routes>
                <Route path="/" element={<DeveloperList onItemClick={showDeveloperDetail} />} />
                <Route path="/developer/:developerId" element={<DeveloperDetail id={developerId} />} />
                <Route path="/new-offer" element={<CreateOffer />} />
                <Route path="/my-offers/*" element={<CompanyOffers />} />
                <Route path="/profile" element={<CompanyProfile onCompanyDeleted={logout}/>} />
            </Routes>
            */}
          
           <NavCompany handleLogout={logout} />
        </div>
    }

}