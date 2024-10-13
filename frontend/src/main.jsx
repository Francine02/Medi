import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { MedicineProvider } from './context/MedicineContext.jsx'

createRoot(document.getElementById('root')).render(
    <MedicineProvider>
      <App />
    </MedicineProvider>
)
