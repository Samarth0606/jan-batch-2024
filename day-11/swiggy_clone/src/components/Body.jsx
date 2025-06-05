import React from 'react'
import RestaurantCard from './RestaurantCard'
import ApiCalling from './ApiCalling'

function Body() {

  let restArr = ApiCalling();
  // console.log("api called");
  // console.log(restArr , "restArr");
  
  

  return (
    <React.Fragment>
        <h1 className=' font-bold text-2xl m-10' >Restaurants with online food delivery in Delhi</h1>
        <button className='border rounded w-1/12 ml-20'>Ratings+</button>
        <button className='border rounded w-1/12 ml-20'>Reset</button>
        <div className='flex flex-wrap w-10/12 m-auto'>
            <RestaurantCard restArr={restArr} />
        </div>
    </React.Fragment>
  )
}

export default Body