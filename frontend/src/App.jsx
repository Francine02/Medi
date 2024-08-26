import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Home } from './pages/Home'
import { Login } from './pages/Login'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="*" element={<Home/>} />
        <Route path="/auth/login" element={<Login/>} />
      </Routes>
    </Router>
  )
}

export default App