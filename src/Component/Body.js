import React from 'react'
import Header from './Header'
import MainContainer from './ProductDetails/MainContainer'
import { Outlet } from 'react-router'

const Body = () => {
  return (
    <>
    <Header/>
    <div >
      <Outlet/>

    </div>
    </>
  )
}

export default Body