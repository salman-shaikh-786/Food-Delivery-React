import { useEffect,useState } from "react";



const useManu=(resId)=>{
    const[manudata,setmanudata]=useState([]);
     useEffect(()=>{
fatch();
},[])

const fatch= async()=>{
    const data= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.022505&lng=72.5713621&restaurantId=" + resId);
    const json= await data.json();
setmanudata(json?.data?.cards[2]?.card?.card?.info);

}
console.log(manudata);
return manudata;
}

export default useManu;