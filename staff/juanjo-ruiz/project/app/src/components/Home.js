export default function ({ onLoggedOut }) {

    const handleLogout = () => {
        delete sessionStorage.token

        onLoggedOut()
    }

    return <div>
        <p>Home</p>
        <button onClick={handleLogout}>cerrar sesión</button>
    </div>
}