import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
        <div className='flex  justify-center items-center my-4 max-mobile:block'>
            <p className='px-3 py-2 font-semibold'> <span className='font-bold text-orange-500'>Quick Shopping </span>is A  Fake Shopping Store . In this Project is used Fake Store Api </p>
            <img className='w-96 mx-2 my-2 py-2 px-2' src='https://fakestoreapi.com/icons/intro.svg'/>
            <h1 className='text-center font-medium bg-purple-600 w-32 mx-10 py-3 px-2 rounded-md'><Link to='https://fakestoreapi.com/'>FAKE STORE API</Link></h1>
        </div>
        
    </div>
  )
}

export default About