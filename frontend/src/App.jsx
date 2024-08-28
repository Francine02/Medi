import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Register } from './pages/Register'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="*" element={<Home/>} />
        <Route path="/auth/login" element={<Login/>} />
        <Route path="/auth/register" element={<Register/>} />
      </Routes>
    </Router>
  )
}

export default App