import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setDeleteItem } from '../../utils/cartSlice';

const CartProduct = ({item}) => {
    const [total,setTotal]=useState('');
    const dispatch =useDispatch();
  return (
    <>
    <div className='flex  items-start justify-around my-10 border border-yellow-300 max-mobile:block px-3 py-3'>
        <img src={item?.image} alt='img' className='w-40 py-3 px-2'/>
        <div>
        <h1 className='font-bold px-2 py-3 '>{item.title}</h1>

        </div>
        <div>
        <p className='px-3 py-3'>${item.price}</p>
        <div className='mt-20 max-mobile:mt-1 w-32 mx-3'><button className='px-2 py-3 bg-orange-500 rounded-lg m-3' onClick={()=>{dispatch(setDeleteItem(item.id))}}>Delete Item</button></div>
         
        </div>
       
    </div>
   
    </>
  )
}

export default CartProduct