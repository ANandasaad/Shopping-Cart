import React from 'react'
import Header from './Header'
import MainContainer from './ProductDetails/MainContainer'
import { Outlet } from 'react-router'

const Body = () => {
  return (
    <div className='w-full'>
    <Header/>
    <div >
      <Outlet/>

    </div>
    </div>
  )
}

export default Body