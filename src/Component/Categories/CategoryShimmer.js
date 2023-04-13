import React from 'react'

const CategoryShimmer = ({category}) => {
    const length=category.length;
  return (
    <div className='flex flex-wrap justify-center mx-3'>
        {Array(length).fill("").map((m,i)=>(<div key={i} className="shadow-lg w-78 h-78 my-5 mx-5 hover:scale-95 max-mobile:w-64 max-mobile:h-74 max-mobile:hover:scale-95 max-mobile">
           <div className='flex justify-center '>
            <div className="w-72 h-72 max-mobile:w-64 max-mobile:h-[155px] bg-gray-400 animate-pulse"></div>
            
            </div> 
          
          
        </div>))}
    </div>
  )
}

export default CategoryShimmer