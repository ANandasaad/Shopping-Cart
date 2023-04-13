import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <div className="shadow-md max-mobile:block box-border ">
      <div className="flex justify-between items-center ">
     <Link to='/'>
        <img
          className="w-36 py-2 px-1  max-mobile:w-28 hover:cursor-pointer"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShnsE8v4P8W7vwYUlNB8BrXIECFDoiyCWaEw&usqp=CAU"
          alt="shopping"
        />
 </Link>
        <div className="max-mobile:flex">
          <input type="text" placeholder="search.." className="w-96 py-2 rounded-md px-1 border border-gray-100 shadow-sm max-mobile:w-28 " />
          <button className="py-2 px-2 mx-2 bg-blue-400 rounded-md max-mobile:text-[12px]">Search</button>
        </div>

        <h2 className="mx-4 py-2 px-5  max-mobile:items-center "> Cart <AiOutlineShoppingCart className="text-3xl max-mobile:text-[15px]"/></h2>
      </div>
    </div>
  );
};

export default Header;
