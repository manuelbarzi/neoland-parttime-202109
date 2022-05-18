
export default function Landing() {
    return (
        <>
        <header>
            <h1 className="text-4xl">Hello Landing</h1>
        </header>
        <section className="grid grid-cols-2">
            <div className="text-center"><a href="/login">Login</a></div>
            <div className="text-center"><a href="/register">Register</a></div>
        </section>
        </>
    )
    
}
