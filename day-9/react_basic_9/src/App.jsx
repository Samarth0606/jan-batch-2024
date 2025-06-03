import React, { Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"

// import Dashboard from "./components/Dashboard"
// import Admin from "./components/Admin"
const Admin = React.lazy(()=>  import("./components/Admin") )
const Dashboard = React.lazy( ()=> import ("./components/Dashboard") )


function App() {
  return (
    <div>
      <Routes>
        <Route element={ <Suspense fallback="LOADING1..." > <Dashboard/> </Suspense> } path="/dashboard" />
        <Route element={ <Suspense fallback="loading2..."> <Admin /> </Suspense> } path="/admin"  />
        <Route element={<Home />} path="/"  />
      </Routes>
    </div>
  )
}

export default App