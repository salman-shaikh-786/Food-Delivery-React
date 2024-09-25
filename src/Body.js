import Restrocard,{vegrestaurant} from "./RestCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";




const Body = () => {
  const [filtertexts,updatedfilterteaxt]=useState([]);
const [rating4,setrating4] = useState([]);

const [primarytext,updatedtext]=useState("");

const Vegitable = vegrestaurant(Restrocard);

useEffect(()=>{
  fatchdata();  
},[]);

const fatchdata = async ()=>{
  const newdata = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.022505&lng=72.5713621&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
const json = await newdata.json();
// console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
setrating4(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
updatedfilterteaxt(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

};
console.log(filtertexts);


if(rating4.length===0){
    return <Shimmer/>
};
    return (
      <div className="bg-[#78B7D0] h-[80.5rem]">

         {/* for filter */}
   <div className="flex m-2 p-3">
    <input type="text" className="border-black border-solid border-2 rounded-2xl w-60 m-2 px-2" value={primarytext} onChange={(e)=>{
      updatedtext(e.target.value);
    }}></input>
    <button className="m-2 px-3 bg-[#16325B] text-white rounded-3xl w-20" onClick={
()=>{
   const filtertext=rating4.filter((t)=>
    t.info.name.toLowerCase().includes(primarytext.toLowerCase())                                     
);
updatedfilterteaxt(filtertext);
}
 }>
   Search </button>
   <button className="m-2 p-2 px-2 bg-[#16325B]  text-white rounded-3xl " onClick={()=>
    {
        const filter4 = rating4.filter((z)=>z.info.avgRating>4.2);
       updatedfilterteaxt(filter4); 
    }
}>ratting more than 4</button>
   </div>

        
        <div className="flex flex-wrap">
          
            {/* <Restrocard x={data[0]} />
          <Restrocard x={data[1]} />
          <Restrocard x={data[2]} />
          <Restrocard x={data[3]} />
          <Restrocard x={data[4]} />
          <Restrocard x={data[5]} />
          <Restrocard x={data[6]} />
          <Restrocard x={data[7]} />
          <Restrocard x={data[0]} />
          <Restrocard x={data[1]} />
          <Restrocard x={data[2]} />
          <Restrocard x={data[3]} />
          <Restrocard x={data[4]} />
          <Restrocard x={data[5]} />
          <Restrocard x={data[6]} />
          // <Restrocard x={data[7]} /> */}
          
          {
            filtertexts.map((y) => (
        <Link key={y.info.id} to={"/restaurant/"+ y.info.id}>

         {y.info.veg ? (<Vegitable x={y}/>)  : (<Restrocard  x={y}/>)} 
          
          
          </Link>  
            )) };
        </div>
      </div>
    );
  };

  export default Body;


  

  

