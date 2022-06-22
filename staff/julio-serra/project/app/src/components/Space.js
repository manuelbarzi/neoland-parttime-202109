import Header from './Header';
import Footer from './Footer'
import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState, React } from "react"
import { retrieveSpace } from '../logic'
import { MusicNoteIcon, VolumeUpIcon, BellIcon, LightBulbIcon, ShieldCheckIcon, ArrowsExpandIcon, ClockIcon } from '@heroicons/react/solid'
import './space.css'
import { Tooltip } from 'flowbite-react'
import 'tw-elements'
import LoginModal from './LoginModal';



export default function Space() {
  const [space, setSpace] = useState()
  const params = useParams()
  const { spaceId } = params
  const [features, setFeatures] = useState()
  const [bookings, setBookings] = useState()
  const [access, setAccess] = useState()

  useEffect(() => {
    try {
      retrieveSpace(spaceId)
        .then(space => {
          setSpace(space)
          setFeatures(space.features)
          setAccess(space.access)
        })
        .catch(error => alert(error.message))
    } catch (error) {
      alert(error.message)
    }
  }, [spaceId])


  // pickupTime = end date + pickupTime
  // const addBooking = event => {
  //     event.preventDefault()
  //     try {
  //         addBookingToSpace(spaceId)
  //             .then(bookings => {
  //                 setBookings(bookings)
  //             })
  //     } catch (error) {
  //         alert(error.message)
  //     }
  // }


  const navigate = useNavigate()
  const { token } = sessionStorage

  const [loggedIn, setLoggedIn] = useState(!!token) //para convertirlo a booleano lo negamos 2 veces
  const [modal, setModal] = useState(false)

  const handleLoggedIn = () => {
    setLoggedIn(true)
    setModal(false)
  }

  const handleGoModal = () => setModal(true)
  const handleClosedModal = () => setModal(false)
  const handleLoggedOut = () => {
    if (loggedIn === true) {
      alert('checkout confirmated')
      setModal(false)
    } else {
      setModal(true)
    }
  }

  const handleBooking = event => {
    event.preventDefault()
    if (token) {
      alert('checkout confirmed')
      setModal(false)
    }
    if (!token) {
      alert('You need to be logged')
      setModal(true)
    }
    else {
      return
    }
  }


  return (
    <>
      <Header />
      {space && <>
        <div className='mt-5'>
          <img className='w-full object-cover' src={space.image} />
        </div></>
      }
      <section className='mt-5 lg:grid lg: grid-cols-2'>

        {space && <>
          <div>
            <div className='p-7 gap-5 grid'>
              <h1 className='nav__font black text-4xl'>{space.title}</h1>
              <p>{space.description}</p>
              <div className='flex gap-3'>
                <span className='flex items-center gap-1'>
                  <Tooltip content={<span>Space size</span>}>
                    <ArrowsExpandIcon className="h-5 w-5 text-blue-500" />
                  </Tooltip>
                  {space.size}<sup>2</sup>
                </span>
                <span className='flex items-center gap-1'>
                  <Tooltip content={<span>Reservation time</span>}>
                    <ClockIcon className="h-5 w-5 text-blue-500" />
                  </Tooltip>{space.time}
                </span>

              </div>
              <div className='flex items-center gap-3'>
                <span className='font-bold'>Features</span>
                {features ? features.map(feature => {
                  if (feature === 'dj') {
                    return <Tooltip content={<span>Dj Included</span>}>
                      <MusicNoteIcon className="h-5 w-5 text-blue-500" />
                    </Tooltip>
                  } else if (feature === 'wc') {
                    return <Tooltip content={<span>Bathrooms Included</span>}>
                      <BellIcon className="h-5 w-5 text-blue-500" />
                    </Tooltip>
                  } else if (feature === 'audio') {
                    return <Tooltip content={<span>Dj Included</span>}>
                      <VolumeUpIcon className="h-5 w-5 text-blue-500" />
                    </Tooltip>
                  } else if (feature === 'lights') {
                    return <Tooltip content={<span>Illumination Included</span>}>
                      <LightBulbIcon className="h-5 w-5 text-blue-500" />
                    </Tooltip>
                  } else if (feature === 'security') {
                    return <Tooltip content={<span>Security Included</span>}>
                      <ShieldCheckIcon className="h-5 w-5 text-blue-500" />
                    </Tooltip>
                  } else
                    return null
                }) : <span>Not found</span>}
              </div>

              {
                modal ? <LoginModal onloggedIn={handleLoggedIn} onClosedModal={handleClosedModal} /> : null
              }

              <span className='text-cuartiary-color font-bold text-2xl'>{space.price}</span>
            </div>
          </div>
          <div className='relative'>
            <div className='p-7 gap-5 grid'>
              <details className='details border-b-2 border-black'>
                <summary className='summary-details font-bold text-xl cursor-pointer list-none'>More Details</summary>
                <form onSubmit={handleBooking}>
                  <tr className='flex justify-between py-2'><td>Type</td><td>{space.type}</td></tr>
                  <tr className='flex justify-between py-2'><td>Deposit</td><td>{space.deposit}</td></tr>
                  <tr className='flex justify-between py-2'><td>Space size</td><td>{space.size}</td></tr>
                  <tr className='flex justify-between py-2'><td>Access</td><td className='flex gap-4 font-bold'>
                    {access ? access.map(accesses => {
                      if (accesses === 'Host access') {
                        return <span>Host Access</span>
                      } else if (accesses === 'None shared') {
                        return <span>None Shared</span>
                      } else if (accesses === 'Grounded level') {
                        return <span>Grounded Level</span>
                      }
                      else
                        return null
                    }) : <span>Not found access</span>}
                  </td></tr>
                  <tr className='flex justify-between py-2 items-center'><td><label for="start">Start Date</label></td><td><input type="datetime-local" id="start" /></td></tr>
                  <tr className='flex justify-between py-2 items-center'><td><label for="end">End Date</label></td><td><input type="datetime-local" id="end" /></td></tr>
                  <tr className='flex justify-between py-2'><td>Total Price</td><td className='font-bold text-xl text-cuartiary-color'>{space.price}</td></tr>

                  <button type="submit" class="my-10 grid mx-auto text-center w-1/3 px-6 py-2.5 bg-secondary-color text-white rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-bs-toggle="modal" _data-bs-target="#exampleModal"
                    onClick={(event) => {
                      event.preventDefault()
                      handleGoModal()
                      handleLoggedOut()
                    }}>
                    Checkout
                  </button>
                </form>
              </details>
            </div>
          </div>
        </>}

      </section>
      <Footer />
    </>
  )
}
