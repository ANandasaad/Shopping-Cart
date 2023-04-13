import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Header = () => {
  const cartlength=useSelector((store)=>store.cart.cartItem);
  
  return (
    <div className="shadow-md w-full max-mobile:block box-border ">
      <div className="flex justify-between items-center max-mobile:w-full ">
     <Link to='/'>
        <img
          className="w-36 py-2 px-1  max-mobile:w-28 hover:cursor-pointer"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShnsE8v4P8W7vwYUlNB8BrXIECFDoiyCWaEw&usqp=CAU"
          alt="shopping"
        />
 </Link>
      <ul className="flex space-x-5">
        <li  className="text-2xl hover:cursor-pointer hover:underline max-mobile:text-[20px] font-sans uppercase font-semibold text-orange-500 hover:text-blue-500"><Link to='/category'>Categories</Link> </li>
        <li className="text-2xl  hover:cursor-pointer hover:underline max-mobile:text-[20px] font-sans uppercase font-semibold  text-orange-500  hover:text-blue-500"><Link to='/about'>About</Link></li>
      </ul>
        
      <div>
        {cartlength.length>0?<p className="max-mobile:text-[10px] max-mobile:px-3 text-orange-500">Cart item-{cartlength.length}</p>:'Cart item-0'}
      <h2 className="mx-4 py-2 px-5  max-mobile:items-center "><Link to='/cart'>  <AiOutlineShoppingCart className="text-3xl max-mobile:text-[15px]"/></Link></h2>
      </div>
       
      </div>
     
    </div>
  );
};

export default Header;
