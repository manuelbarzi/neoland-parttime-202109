import logo from '../assets/img/logo.png'
import { MailIcon } from '@heroicons/react/solid'


export default function Footer() {


    return (
        <>
            <footer className="grid md:grid-cols-2">
                <div className='bg-tertiary-color text-white py-14'>
                    <div className="flex justify-center gap-5">
                        <img src={logo} width="45" alt="" />
                        <h1 className="nav__font black text-4xl">Space Rental</h1>
                    </div>
                    <div className='flex justify-center'>
                        <p className='pt-10'>Copyright 2022 · Space Rental <br />
                            All rights reserved</p>
                    </div>
                </div>
                <div className='bg-cuartiary-color text-white py-14 grid gap-5'>
                    <div className="flex items-center justify-center gap-5">
                        <h1 className="nav__font black text-4xl">Contact Us</h1>
                        <MailIcon className="h-10 w-10 text-secondary-color" />
                    </div>
                    <div className="flex items-center justify-center lg:flex gap-5">
                        <h1 className="nav__font black text-4xl">Follow Us</h1>
                        <div className='gap-5 flex'>
                            <i class="fa-brands fa-2x text-secondary-color fa-facebook"></i>
                            <i class="fa-brands fa-2x text-secondary-color fa-twitter"></i>
                            <i class="fa-brands fa-2x text-secondary-color fa-linkedin"></i>
                            <i class="fa-brands fa-2x text-secondary-color fa-github"></i>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}