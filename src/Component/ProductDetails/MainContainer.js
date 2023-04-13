import React, { useEffect, useState } from 'react'
import Product from './Products'
import { PRODUCT_API } from '../../utils/contants';
import Shimmer from './Shimmer';

const MainContainer = () => {
  const [product,setProduct]=useState([]);

  


  async function getData()
  {
    const response=await fetch(PRODUCT_API);
    const data=await response.json();
    console.log(data);
    setProduct(data);
  }
  useEffect(()=>{
    getData();
  },[]);
  return product.length>0? (
    <>
    <div className='my-4 mx-4'>
    <input type="text" placeholder="search.." className="w-96 py-2   rounded-md px-1 border border-gray-100 shadow-sm max-mobile:w-28 " />
     <button className="py-2 px-2 mx-2 bg-blue-400 rounded-md max-mobile:text-[12px]">Search</button>
    </div>
    <div className='w-full m-5'>
       
        <Product product={product}/>
    </div>
    </>
  ):(<Shimmer/>)
}

export default MainContainer