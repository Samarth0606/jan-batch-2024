import { useEffect, useState } from "react"
import axios from "axios"

function ApiCalling() {
  
    const [allRestaurantArr,setAllRestaurantArr] = useState([]);

    useEffect(()=>{
        async function calling(){
            const API = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            let resp = await axios.get(API);
            setAllRestaurantArr(resp.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
        }
        calling()
    } , [])

    return allRestaurantArr
}

export default ApiCalling