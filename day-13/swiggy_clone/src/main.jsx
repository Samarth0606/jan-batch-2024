import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Signin from './components/Signin.jsx'
import Help from './components/Help.jsx'
import Offers from './components/Offers.jsx'
import Body from './components/Body.jsx'
import Error from './components/Error.jsx'
import RestaurantDetails from './components/RestaurantDetails.jsx'
import RealTimeClock from './components/RealTimeClock.jsx'
import Cart from './components/Cart.jsx'

const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    errorElement: <Error /> ,
    children:[
      {
        path:"/",
        element: <Body />
      },
      {
        path:"/offers",
        element: <Offers />
      },
      {
        path:"/help",
        element: <Help />
      },
      {
        path:"/signin",
        element: <Signin />
      },
      {
        path:"/restaurant/:id",
        element: <RestaurantDetails />
      },
      {
        path:"/clock",
        element: <RealTimeClock />
      },
      {
        path:"/cart",
        element: <Cart />
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter} >
    <App />
  </RouterProvider> 
)
