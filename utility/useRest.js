import { useEffect,useState } from "react";



const useRest=(resId)=>{
const[restmanu,setrestmanu]=useState([]);

 useEffect(()=>{
fatch();
},[])

const fatch= async()=>{
    const data= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.022505&lng=72.5713621&restaurantId=" + resId);
    const json= await data.json();
setrestmanu(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card);
}
console.log(restmanu);
return restmanu;
}

export default useRest;