import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import App , {Nano , BmBabloo} from './App.jsx'
// import  {BmBabloo} from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div>
      {/* <Nano /> */}
      {/* <BmBabloo /> */}
      <App />
    </div>
  </StrictMode>,
)
