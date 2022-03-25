
export default function Landing() {
    return (
        <>
            <div className="bg-cover h-screen bg-right">
                <header className="w-full container mx-auto p-6">
                <a href="/">
                    <nav className="flex justify-between items-center">
                        <div className="flex items-center hover:text-indigo-300 text-indigo-400 text-4xl font-bold"><svg class="h-8 fill-current text-indigo-600 pr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm-5.6-4.29a9.95 9.95 0 0 1 11.2 0 8 8 0 1 0-11.2 0zm6.12-7.64l3.02-3.02 1.41 1.41-3.02 3.02a2 2 0 1 1-1.41-1.41z"></path>
                        </svg>AppNote</div>
                        <div className="gap-10 flex text-violet-700 text-xl">
                            <span><a className="hover:underline hover:underline-offset-8" href="/Login">Auth</a></span>
                            <span><a className="hover:underline hover:underline-offset-8" href="/Register">Register</a></span>
                        </div>
                    </nav>
                    </a>
                </header>

                <section className="container w-full mx-auto pt-24 px-6 flex xl:flex-cols-4 justify-evenly items-center">
                    <div className="w-2/5 flex flex-col gap-10">
                        <h1 className="text-6xl text-4xl text-left text-indigo-600 font-bold">Welcome to NoteAPP</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae totam ratione reprehenderit enim. Qui doloremque consequuntur corrupti odit officia aperiam natus beatae voluptatum, soluta dolores debitis itaque, eaque, facilis in. Eum, error ab ducimus reprehenderit nostrum omnis iste sunt voluptatibus harum consequuntur est molestiae quaerat numquam officia dolorem? Laborum, commodi?</p>
                    <p className="text-gray-400">&copy; 2022</p>
                    </div>
                    <div className="w-full xl:w-3/5 py-6 overflow-y-hidden">
                        <img className="w-5/6 mx-auto lg:mr-0" src="https://www.tailwindtoolbox.com/templates/devices.svg" alt="" />
                    </div>
                </section>

            </div>
        </>
    )
}