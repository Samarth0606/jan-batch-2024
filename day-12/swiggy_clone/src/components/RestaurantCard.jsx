import { Link } from "react-router-dom"

function RestaurantCard({restArr}) {
  // console.log(restArr , "restArr card");
  
  return (
    restArr.map((restDetail)=>{
      return(
        <Link to={`/restaurant/${restDetail.info.id}`}>
          <div className="m-6 w-60">
            <img className="w-58 h-42 rounded-xl" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restDetail.info.cloudinaryImageId}`} alt="" />
            <h1 className="px-2 font-bold">{restDetail.info.name}</h1>
            <span className="px-2 font-bold">{restDetail.info.avgRating}</span>
            <span className="px-2 mx-3">{restDetail.info.sla.slaString}</span>
            <p className="px-2">{restDetail.info.cuisines[0]}</p>
            <p className="px-2">{restDetail.info.locality}</p>
          </div>
        </Link>
      )
    })
  )
}

export default RestaurantCard