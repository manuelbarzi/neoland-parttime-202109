import Cards from './Cards'
import Header from './Header'
import Footer from './Footer'
import { useState } from 'react'


export default function Landing() {
    const [query, setQuery] = useState()
    
    const handleSearch = query => setQuery(query)

    return (
        <>
            <Header onSearch={handleSearch} />
            <section className='bg-principal-color h-96 grid items-center mt-6'>
                <container className='bg-secondary-color text-white p-5 m-9 h-5/6'>
                    <h1 className="nav__font text-4xl my-5">Why Space Rental</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</p>
                </container>
            </section>

            <Cards query={query} />
            <Footer />

        </>
    )

}
