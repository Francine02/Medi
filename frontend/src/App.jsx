import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { Medicines } from './pages/Medicines'

function App() {
  const isAuthenticated = !!localStorage.getItem('token');
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route
          path="/medicines"
          element={isAuthenticated ? <Medicines /> : <Navigate to="/auth/login" />} />
      </Routes>
    </Router>
  )
}

export default App