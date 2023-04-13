import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartProduct from './CartProduct';
import { setClearItem } from '../../utils/cartSlice';

const Cart = () => {
  const addCartItem=useSelector((store)=>store.cart.cartItem);
  const dispatch=useDispatch();
  console.log(addCartItem);
  return (
    <>
    <div className='flex justify-between items-center mt-3 px-3'>
      <h1 className='text-3xl px-3 py-3 font-bold text-blue-700'>Shopping Cart</h1>
      <button className='   px-3 py-2 bg-orange-500 rounded-lg ' onClick={()=>{dispatch(setClearItem())}}>Clear Cart</button>
    </div>
    <div className='mx-3'>
     { addCartItem.map((item)=>( <CartProduct key={item.id} item={item}/>))}
    </div>
    </>
    
  )
}

export default Cart