import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { PRODUCT_API } from '../../utils/contants';
import CategoryItem from './CategoryItem';
import CategoryShimmer from './CategoryShimmer';
import { Link } from 'react-router-dom';
const CategoryProduct = () => {
    const catgories=useSelector((store)=>store.category.categoryItem);
  const [category,setCategory]=useState([]);
    
     useEffect(()=>{
      getCategory();
    },[catgories]);

    async function getCategory(){
      const data=await fetch(PRODUCT_API+'/category/'+catgories);
      const response= await data.json();
      console.log(response);
      setCategory(response);
    }
    console.log(category.length +"cat");
  return category.length==0?(<CategoryShimmer category={category}/>):(
    <>
    <h1 className='text-3xl px-2 py-2 mx-4 border border-gray-200 rounded uppercase bg-blue-200 font-bold text-center hover:bg-yellow-300 '>{catgories}</h1>
    <div className='flex flex-wrap justify-center items-center'>
       
        {category.map((list)=>(<CategoryItem key={list.id} list={list}/>))}

    </div>
    
    </>
  )
}

export default CategoryProduct