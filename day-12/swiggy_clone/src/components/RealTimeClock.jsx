import React, { useEffect, useState } from 'react'

function RealTimeClock() {
    const [time,setTime] = useState(new Date().toLocaleTimeString());
  
    useEffect(()=>{
        let idd = setInterval(function(){
            setTime(new Date().toLocaleTimeString())
        } , 1000)
        return ()=> clearInterval(idd)
    } , [])

    return (
    <div>Time Right Now:  {time} </div>
  )
}

export default RealTimeClock