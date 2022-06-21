import { authenticateUser } from "../logic";
import { useNavigate } from "react-router-dom"
import { useState} from 'react'

export default function LoginModal({ onloggedIn }) {

    const [modal, setModal] = useState(false)
    const handleClickRegister = () => navigate('/register')
    const navigate = useNavigate()

    const auth = event => {
        event.preventDefault()
        const { target: { email: { value: email }, password: { value: password } } } = event // extraemos los campos

        try {
            authenticateUser(email, password)
                .then(token => {
                    sessionStorage.token = token

                    onloggedIn()
                })
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    const handleCheckoutClick = () => setModal(true)
    const handleCloseClick = () => setModal(false)



    return (
        <>
            <button type="button" class="px-6
      py-2.5
      bg-blue-600
      text-white
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out" data-bs-toggle="modal" _data-bs-target="#exampleModal" onClick={handleCheckoutClick}>
                Checkout
            </button>

            {modal && <div style={{display: 'block'}} class="show   modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
                id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog relative w-auto pointer-events-none">
                    <div
                        class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                        <div
                            class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                            <h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalLabel">Loggin your account</h5>
                            <button onClick={handleCloseClick} type="button"
                                class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                                data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body relative p-4 bg-principal-color h-96">
                            <form className="grid gap-6 w-full mx-auto" onSubmit={auth}>
                                <div className="flex flex-wrap items-stretch w-full relative h-15 bg-white items-center rounded mb-4">
                                    <div className="flex -mr-px justify-center w-15 p-4">
                                        <span
                                            className="flex items-center leading-normal bg-white rounded rounded-r-none text-xl px-3 whitespace-no-wrap text-gray-600"
                                        >
                                            <i className="fas fa-envelope"></i>
                                        </span
                                        >
                                    </div>
                                    <input
                                        type="email" name="email"
                                        className="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border-0 h-10 px-3 relative self-center font-roboto text-xl outline-none"
                                        placeholder="Email"
                                    />
                                    <div className="flex -mr-px">
                                        <span
                                            className="flex items-center leading-normal bg-white rounded rounded-l-none border-0 px-3 whitespace-no-wrap text-gray-600"
                                        >
                                        </span>
                                    </div>
                                </div>
                                <div className="flex flex-wrap items-stretch w-full relative h-15 bg-white items-center rounded mb-4">
                                    <div className="flex -mr-px justify-center w-15 p-4">
                                        <span
                                            className="flex items-center leading-normal bg-white rounded rounded-r-none text-xl px-3 whitespace-no-wrap text-gray-600"
                                        >
                                            <i className="fas fa-lock"></i>
                                        </span
                                        >
                                    </div>
                                    <input
                                        type="password" name="password"
                                        className="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border-0 h-10 px-3 relative self-center font-roboto text-xl outline-none"
                                        placeholder="Password"
                                    />
                                    <div className="flex -mr-px">
                                        <span
                                            className="flex items-center leading-normal bg-white rounded rounded-l-none border-0 px-3 whitespace-no-wrap text-gray-600"
                                        >
                                            <i className="fas fa-eye-slash"></i>
                                        </span>
                                    </div>
                                </div>

                                <button className="w-full bg-transparent hover:bg-indigo-400 text-white font-semibold hover:text-white py-2 px-4 border border-white-500 hover:border-transparent rounded">
                                    Sign in
                                </button>

                                <div className='pb-10 bottom-0 absolute m-auto left-0 right-0 flex flex-col items-center gap-5'>
                                    <p className='text-white'>Not a member? <span className='text-secondary-color font-bold cursor-pointer' onClick={handleClickRegister}>Register now</span></p>
                                </div>

                            </form>                      </div>
                        <div
                            class="bg-principal-color modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                            <button type="button" class="px-6
          py-2.5
          bg-secondary-color
          text-white
          rounded
          shadow-md
          hover:bg-purple-700 hover:shadow-lg
          focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-purple-800 active:shadow-lg
          transition
          duration-150
          ease-in-out" data-bs-dismiss="modal" onClick={handleCloseClick}>Close</button>
                        </div>
                    </div>
                </div>
            </div>}

        </>
    )
}