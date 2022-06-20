import Header from './Header';
import Footer from './Footer'
import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState, React } from "react"
import { retrieveSpace } from '../logic'
import { MusicNoteIcon, VolumeUpIcon, BellIcon, LightBulbIcon, ShieldCheckIcon, ArrowsExpandIcon, ClockIcon } from '@heroicons/react/solid'
import './space.css'
import { Tooltip, Modal, Button, Label, TextInput, Checkbox } from 'flowbite-react'
import { onClick, onClose } from 'flowbite'



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


  const handleBooking = event => {
    event.preventDefault()
    if (token) {
      alert('checkout confirmed')
    }
    if (!token) {
      navigate('/login')
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


                <button className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-modal-toggle="authentication-modal">
                  Toggle modal
                </button>

                <div id="authentication-modal" tabindex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center">
                  <div className="relative p-4 w-full max-w-md h-full md:h-auto">

                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                      <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      </button>
                      <div className="py-6 px-6 lg:px-8">
                        <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
                        <form className="space-y-6" action="#">
                          <div>
                            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required="" />
                          </div>
                          <div>
                            <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required="" />
                          </div>
                          <div className="flex justify-between">
                            <div className="flex items-start">
                              <div className="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required="" />
                              </div>
                              <label for="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                            </div>
                            <a href="#" className="text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
                          </div>
                          <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                            Not registered? <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>



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

                  <button type='submit' className='flex mx-auto my-4 bg-secondary-color text-white px-20 py-3 text-xl font-bold border rounded-md hover:bg-white hover:border-cuartiary-color hover:text-cuartiary-color'>Checkout</button>
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
