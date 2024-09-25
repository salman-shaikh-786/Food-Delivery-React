import { logimg } from "../utility/mockdata";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utility/useOnlinestatus";

const Header = () => {
const [btnName,changedName]=useState("login");
const onlinestatus=useOnlinestatus();
    return (
      <div className="flex justify-between bg-[#FFDC7F] h-28 items-center" >
        <div className="w-[120px]  m-4 p-4">
          <img className="rounded-full"
            src={logimg}
          />
        </div>
        <h1 className="text-6xl font-extrabold font-serif">FOOD MAMA</h1>
        <div>
          <ul className="flex m-4 p-4 items-center"> 
           
            <li className="m-4 p-4 px-10 rounded-2xl bg-[#16325B] text-white">
              <Link to="/home">Home</Link>
            </li >
            <li className="m-4 p-4 px-10 rounded-2xl bg-[#16325B] text-white">
            <Link to="/about">About</Link>
            </li>
            <li className="m-4 p-4 px-10 rounded-2xl bg-[#16325B] text-white">
            <Link to="/contactus">Contact</Link>
            </li>
            <li className="m-4 p-4 px-10 rounded-2xl bg-[#16325B] text-white">
              <a href="#">Cart</a>
            </li>
            <li className="m-4 p-4 px-10 rounded-2xl bg-[#16325B] text-white">
            <Link to="/Grocery">Grocery</Link>
            </li>
            <li className="m-4 p-4 px-10 rounded-2xl bg-[#16325B] text-white">
              Status: {onlinestatus? "🟢" : "🔴" }
            </li>
            <li className="m-4 p-4 px-10 rounded-2xl bg-[#16325B] text-white">
            <button onClick={
          ()=>{
            btnName==="login"
              ?changedName("logout")
              :changedName("login");
          }

            }>
            
            {btnName}
            
          </button>
          </li>
          </ul>
        </div>
      </div>
      
    );
  };

  export default Header;