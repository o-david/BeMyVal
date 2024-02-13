import React from 'react'
import Yesimg from '../assets/Yesimg.jpeg' 

const Yes = () => {
  return (
     <div className='flex justify-center items-center h-[100vh] bg-[#f7f7f7]'>
        <img src={Yesimg} alt="" className='md:w-1/2 w-full' />

    </div>
  )
}

export default Yes