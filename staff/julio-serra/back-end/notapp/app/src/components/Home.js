export default function Home({ onLogout }) {
    const logout = () => {
        delete sessionStorage.token
        onLogout()
    }

    return <div>
        <h1>Autenticación correcta</h1>
        <h1>Bienvenid@ a Home NoteApp</h1>
        <button onClick={logout}>Log Out</button>
    </div>
}