import { Routes, Route, Navigate} from 'react-router-dom'
import Register from './Register'

function App() {
   return <Routes>
       <Route path="/register" element={<Register />} />
   </Routes>
}

export default App;