import { cardimage } from "../utility/mockdata";

const Restrocard = (props) => {
    const { x } = props;
    return (
      <div className="w-[250px] m-4 p-4 h-[410px] bg-[#FFDC7F] rounded-3xl">
        <img
          className="w-[220px] h-[215px]  rounded-3xl"
          src={cardimage+x.info.cloudinaryImageId}/>
        <h3 className="m-1 p-1 font-bold">{x.info.name}</h3>
        <h4 className="m-1 p-1">{x.info.cuisines.join(', ')}</h4>
        <h3 className="m-1 p-1"> {x.info.avgRating}⭐</h3>
        {/* {console.log(x)} */}
      </div>
     
    );
  };

  export const vegrestaurant = (Restrocard)=>{
    return (props)=>{
      return(
        <div>
          <label className="absolute bg-[green] text-white pl-2 ml-2 w-14 rounded-xl text-center">Veg</label>
          <Restrocard {...props}/>
        </div>
      )
    }
  }


  export default Restrocard;