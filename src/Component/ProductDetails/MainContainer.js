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
    <div className='w-full m-5'>
        <Product product={product}/>
    </div>
  ):(<Shimmer/>)
}

export default MainContainer