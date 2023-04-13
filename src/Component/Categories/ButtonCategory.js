import React from 'react'

const ButtonCategory = ({category}) => {
  return (
    <div className='max-mobile:flex ' >
        {category.map((button)=>(<button className='px-10 py-2 mx-2 my-2 rounded-lg bg-yellow-300 text-[15px]'>{button}</button>))}
    </div>
  )
}

export default ButtonCategory