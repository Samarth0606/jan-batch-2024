import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Home() {

    const navigate = useNavigate() //returns fn

    function handleAdmin(){
        // window.location.href = "/admin"
        navigate('/admin')
    }
    function handleDashboard(){
        // window.location.href = "/dashboard"
        navigate('/dashboard')
    }
  return (
    <div>
        <button onClick={handleAdmin}>Admin</button> 
        <button onClick={handleDashboard}>Dashboard</button>

        {/* <a href="/admin">Admin</a>
        <a href="/dashboard">Dashboard</a> */}

        {/* <Link to="/admin" >Admin</Link> */}
        {/* <Link to="/dashboard" >Dashboard</Link> */}
    </div>
  )
}

export default Home