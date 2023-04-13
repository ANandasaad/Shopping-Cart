import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { PRODUCT_API } from '../../utils/contants';
import { AiFillStar } from 'react-icons/ai';
import ProductShimmer from './ProductShimmer';

const ProductPage = () => {
  const {id}=useParams();
  const [singleProduct,setSingleProduct]=useState([]);

 async function getProductDetails(){
  const data=await fetch(PRODUCT_API+"/"+id);
  const json=await data.json();
  console.log(json);
  setSingleProduct(json);
 }

  useEffect(()=>{
  getProductDetails();
  },[])
  return singleProduct!=0?(
    <div>
        <div className='flex justify-around items-center max-mobile:flex-col'>
           <div className='my-4 px-2 py-2 max-mobile:mx-5 max-mobile:px-5 w-full '>
            <img src={singleProduct.image} alt='productimg'/>
           </div>
           <div >
           <div className='flex flex-col justify-end px-4 '>
           <h1 className='text-3xl font-bold py-4'>{singleProduct.title}</h1>
           <h2 className='flex  items-center text-blue-700 py-1 px-4 font-bold'><span><AiFillStar className='text-yellow-400'/></span>{singleProduct.rating?.rate} ({singleProduct.rating?.count}) ratings </h2>
           <h2 className='text-2xl px-4'>Price: ${singleProduct.price} </h2>
           <div className='px-4 py-4'>
               <h4 className='font-bold py-2'>Description:</h4>
              <h5>   {singleProduct.description}</h5>
            </div>
           </div>
           <div className='mx-4 max-mobile:mx-20 py-5'>
           <button className='py-2 px-9 bg-yellow-400 rounded-lg '>Add to Cart</button>
           </div>
           </div>
          
        </div>
       
    </div>
  ):(<ProductShimmer/>)
}

export default ProductPage