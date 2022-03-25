

function App() {
  return <div className="bg-gray-300 h-screen flex justify-center items-center">
    <form className="flex flex-col md:grid md:grid-cols-2 xl:grid-cols-3 gap-5">
        <input className="rounded xl:col-span-2 xl:row-start-1" type="email" name="email" placeholder="Email" />
        <input className="rounded xl:col-span-2 xl:row-start-2" type="password" name="password" placeholder="Password" />
        <button className="md:col-span-2 xl:col-start-3 xl:row-span-2 hover:text-white bg-red-100 hover:bg-blue-100">Login</button>
    </form>
  </div>
}

export default App;
