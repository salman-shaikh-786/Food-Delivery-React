import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useManu from "../utility/useMenu";
import useRest from "../utility/useRest";


const RestaurantManu=()=>{


// const [manudata, setmanudata] = useState([]);
// const [restmanu,setrestmanu]=useState([]);



    // useEffect(
    //     ()=>{
    //      fetchManu();
    //     },[]
    // );


    const {resId} = useParams();
    const manudata=useManu(resId);
    const restmanu=useRest(resId);


// const fetchManu = async()=>{
// const fetchdata = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.022505&lng=72.5713621&restaurantId=" + resId );
// const json = await fetchdata.json();
// setmanudata(json?.data?.cards[2]?.card?.card?.info);
// setrestmanu(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card);

// };
// console.log(manudata);
// console.log(restmanu);
// const {name} =(manudata?.cards[2]?.card?.card?.info);
// const {name} = manudata.cards[2].card?.card?.info;


if(manudata.length===0){
    return <Shimmer/>
};
    return(
<div className="bg-[#78B7D0] block">
<h1 className="text-center p-8 text-[100px] font-extrabold block w-[60rem] bg-[#227B94] ml-[31rem] mb-2 mt-2 rounded-full">{manudata.name}</h1>
<p className="text-center p-2 text-[35px] font-extrabold block w-[35rem] bg-[#227B94] ml-[43rem] mb-10 rounded-full">{manudata.cuisines
}-Rs{manudata.costForTwo/100}</p>
<h2 className="text-center p-2 text-[35px] font-extrabold block w-[25rem] bg-[#16325B] text-white ml-[48rem] rounded-full">Manu</h2>
<ul className="flex flex-wrap m-5 p-5">
    {restmanu?.itemCards?.map(i=><li key={i?.card?.info?.id} className="text-3xl m-8 p-8 bg-[#FFDC7F] w-[300px] rounded-3xl">
        <img className="w-[250px] rounded-3xl " src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" + i?.card?.info?.imageId}></img>{i?.card?.info?.name}-{i?.card?.info.price/100 || i?.card?.info.finalPrice/100}Rs
      
        </li>)}
</ul>

</div>
    );
};
export default RestaurantManu;