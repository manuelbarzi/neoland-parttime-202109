import logo from '../assets/img/logo.png'


export default function Footer() {


    return (
        <>
            <footer className="grid grid-cols-2">
                <div className='bg-tertiary-color text-white py-20'>
                    <div className="flex items-center justify-around">
                        <img src={logo} width="45" alt="" />
                        <h1 className="nav__font black text-4xl">Space Rental</h1>
                    </div>
                    <div className='pl-28'>
                        <p className='pt-10'>Copyright 2022 · Space Rental <br />
                            All rights reserved</p>
                    </div>
                </div>
                <div className='bg-cuartiary-color text-white p-15'>
                    <div className="flex items-center justify-evenly">
                        <h1 className="nav__font black text-4xl">Contact Us</h1>
                    </div>
                    <div>
                        <h1 className="nav__font black text-4xl">Follow Us</h1>

                    </div>
                </div>
            </footer>
        </>
    )
}