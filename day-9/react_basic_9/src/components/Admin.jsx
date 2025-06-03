import React from 'react'
// import Lolipop from './Lolipop'

const Lolipop = React.lazy(()=>import ('./Lolipop'))

function Admin() {
  return (
    <div>
        <h1>Admin</h1>
        <Lolipop />
    </div>
  )
}

export default Admin