import React from 'react'

const ProductShimmer = () => {
  return (
    <div >
        <div className='flex justify-around items-center max-mobile:flex-col'>
           <div className='my-4 px-2 py-2 max-mobile:mx-5 max-mobile:px-5 w-1/2  h-[80vh]  bg-gray-500 animate-pulse max-mobile:w-80 rounded-lg'>
             
           </div>
           <div >
           <div className='flex flex-col justify-end px-4 bg-white '>
           <div className=' font-bold  w-96 bg-gray-500 animate-pulse rounded max-mobile:w-64 h-[20px]'  ></div>
           <div className='flex  items-center my-4 py-3 px-4 w-40 bg-gray-500 rounded animate-pulse'></div>
           <div className=' px-4'></div>
           <div className='px-4 py-4'>
               <div className=' py-2'></div>
             
            </div>
           </div>
           <div className='mx-4 max-mobile:mx-20 py-5'>
           <div className='py-2 px-9  rounded-lg bg-gray-500 animate-pulse'></div>
           </div>
           </div>
          
        </div>
       
    </div>
  )
}

export default ProductShimmer