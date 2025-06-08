import React, { useEffect, useState } from 'react'
import RestaurantCard from './RestaurantCard'
import ApiCalling from './ApiCalling'
import Search from './Search';

function Body() {
  let restArr = ApiCalling();
  let [allRestArray,setAllRestArray] = useState(restArr);
  const [isClicked,setIsClicked] = useState(false);
  const [isClicked2,setIsClicked2] = useState(false);

  useEffect(()=>{
    if(restArr && restArr.length){
      setAllRestArray(restArr)
    }
  } , [restArr])

  function filterTopRestaurant(restArr){
    let ratingFilteredArray = restArr.filter((restaurant)=>restaurant.info.avgRating >= 4.5)
    setAllRestArray(ratingFilteredArray)
    setIsClicked(true)
    setIsClicked2(false)
  }
  function resetFilter(){
    setAllRestArray(restArr)
    setIsClicked2(true)
    setIsClicked(false)
  }
  
  
  return (
    <React.Fragment>
        <h1 className=' font-bold text-2xl m-10' >Restaurants with online food delivery in Delhi</h1>
        <button onClick={()=>filterTopRestaurant(restArr)} className={isClicked? "bg-amber-600 border rounded w-1/12 ml-20" : 'border rounded w-1/12 ml-20'}>Ratings 4.5+</button>
        <button onClick={()=>resetFilter(restArr)} className={isClicked2? "bg-amber-600 border rounded w-1/12 ml-20" : 'border rounded w-1/12 ml-20'}>Reset Filter</button>
        <div className='mt-6'>
          <Search restArr={restArr} setAllRestArray={setAllRestArray} />
        </div>
        <div className='flex flex-wrap w-10/12 m-auto'>
            <RestaurantCard restArr={allRestArray} />
        </div>
    </React.Fragment>
  )
}

export default Body