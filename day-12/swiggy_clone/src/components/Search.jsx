
function Search({restArr , setAllRestArray}) {

    function handleSearch(serchedText){
        let searchedRest = restArr.filter((restaurant)=>  restaurant.info.name.toLowerCase().includes(serchedText.toLowerCase()))
        setAllRestArray(searchedRest)
    }

  return (
    <div>
        <input className="border rounded ml-20" onChange={(e)=>handleSearch(e.target.value)} type="text" placeholder="Search Here" />
    </div>
  )
}

export default Search